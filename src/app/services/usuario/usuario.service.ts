import { URL_SERVICIOS } from './../../config/config';
import { Usuario } from './../../models/usuario.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {



  usuario: Usuario;
  token: string;


  constructor(
    private http: HttpClient,
    public router: Router,
    public _subirArchivoService: SubirArchivoService
    ) {
    this.cargarStorage();
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    localStorage.removeItem('id');

    this.router.navigate(['/login']);
  }

  estaLogeado(){
    return (this.token.length > 5) ? true : false;
  }

  cargarStorage() {
    if ( localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {

    localStorage.setItem('id', id);
    localStorage.setItem('token', token );
    localStorage.setItem('usuario', JSON.stringify(usuario));
  
    this.usuario = usuario;
    this.token = token;
  
  }

  loginGoogle(token: string) {
    const url = URL_SERVICIOS + '/login/google';

    return this.http.post(url, {token})
    .pipe(
      map( (resp: any) => {
        this.guardarStorage(resp.id, resp.token, resp.usuario);
        return true;
      })
    );;
  }

  login( usuario: Usuario, recuerdame: boolean = false) {

    if ( recuerdame ) {
      localStorage.setItem('email',  usuario.email);
    } else{
      localStorage.removeItem('email');
    }
    const url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
    .pipe(
      map( (resp: any) => {
        this.guardarStorage(resp.id, resp.token, resp.usuario);
        return true;
      })
    );

  }

  crearUsuario(usuario: Usuario) {
    const url = URL_SERVICIOS + '/usuario';

    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        swal(
          'Usuario Creado',
          'Nombre: ' + resp.usuario.nombre + '\n Email: ' + resp.usuario.email,
          'success'
        );
        return resp.usuario;
      })
    );
  }

  actualizarUsuario( usuario: Usuario) {

    let url = URL_SERVICIOS + '/usuario/' + usuario._id;
    url += '?token=' + this.token;

    return this.http.put(url, usuario)
                .pipe(
                  map( (resp: any) => {
                    this.usuario = resp.usuario;
                    swal('Usuario actualizado', usuario.nombre, 'success');
                    this.guardarStorage(resp.usuario._id, this.token, resp.usuario);
                    return true;
                  })
                );
  }

  cambiarImagen( file: File, id: string ) {

    this._subirArchivoService.subirArchivo(file, 'usuarios', id)
      .then( (resp: any) => {
        console.log(resp);
        
        this.usuario.img = resp.usuario.img;
        swal( 'Imagen Actualizada', this.usuario.nombre, 'success');
        this.guardarStorage(id, this.token, resp.usuario);
      })
      .catch( resp => {
        console.log(resp);
        
      }
      );

  }
}
