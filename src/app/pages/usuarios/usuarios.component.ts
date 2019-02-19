import { Usuario } from './../../models/usuario.models';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
// import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde = 0;
  totalRegistros = 0;
  cargando = true;

  constructor(
    public _usuarioServices: UsuarioService,
    public _modalUploadServices: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarUsuarios();
    this._modalUploadServices.noticificacion.subscribe( (resp) => {
      this.cargarUsuarios();
    });
  }

  mostrarModal( id: string){
    this._modalUploadServices.mostrarModal('usuarios', id);
  }

  cargarUsuarios() {
    this.cargando = true;
    this._usuarioServices.cargarUsuarios(this.desde)
      .subscribe( (resp: any) => {
        // console.log( resp );
        this.totalRegistros = resp.totalUsuarios;
        this.usuarios = resp.usuarios;
        this.cargando = false;
      });
  }

  cambiarDesde(valor: number) {
    const desde = this.desde + valor;
    // console.log(desde);

    if (desde >= this.totalRegistros ) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();

  }

  buscarUsuario( termino: string ) {

    if ( termino.length <= 0) {
      this.cargarUsuarios();
      return;
    }
    
    this.cargando = true;
    this._usuarioServices.buscarUsuario( termino )
      .subscribe( (resp: any) => {
        this.totalRegistros = resp.usuarios.length;
        this.usuarios = resp.usuarios;
        this.cargando = false;
        // console.log(resp);

      })
  }

  borrarUsuario( usuario: any ) {

    if ( usuario._id === this._usuarioServices.usuario._id){
      swal('No Puede Borrar Usuario', 'No se puede borrar a usted mismo', 'error')
      return;
    }

    swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a ' + usuario.nombre,
      icon: 'warning',
      buttons: ['Cancel', 'Ok'],
      dangerMode: true,
    })
    .then( borrar => {

      if ( borrar ) {
        this._usuarioServices.borrarUsuario( usuario._id)
            .subscribe( (resp: any) => {
              console.log( resp );
              this.cargarUsuarios();
            });
      }
    });

  }

  guardarUsuario ( usuario: Usuario ) {
    this._usuarioServices.actualizarUsuario( usuario ).subscribe();
  }

}
