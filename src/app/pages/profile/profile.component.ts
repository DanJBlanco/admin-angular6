import { UsuarioService } from './../../services/service.index';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  imagenCargar: File;
  imagenTemp: string;

  constructor(
    public _userService: UsuarioService
    ) {
      this.usuario = this._userService.usuario;
      // console.log(this.usuario);
    }

  ngOnInit() {
  }

  actualizarDatos( usuario: Usuario ) {

    this.usuario.nombre = usuario.nombre;

    if ( !this.usuario.google ) {

      this.usuario.email = usuario.email;
    }

    this._userService.actualizarUsuario(this.usuario)
    .subscribe();

  }

  seleccionImagen( archivo: File ) {

    if ( !archivo ) {
      this.imagenCargar = null;
      return;
    }

    if  ( archivo.type.indexOf('image') < 0 ) {
      swal('Solo Imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenCargar = null;
      return;
    }

    const reader = new FileReader();
    // const urlImagenTemp = reader.readAsDataURL( archivo );
    reader.readAsDataURL(  archivo );
    reader.onload = () => {
      // console.log(reader.result);
      this.imagenTemp = reader.result;

    };
    // console.log(archivo);
    this.imagenCargar = archivo;

  }

  cambiarImagen() {

    this._userService.cambiarImagen( this.imagenCargar, this.usuario._id );

  }
}
