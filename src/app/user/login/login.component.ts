import { Router } from '@angular/router';
import { Usuario } from './../../models/usuario.models';
import { UsuarioService } from './../../services/service.index';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recordar: boolean;
  email: string;
  auth2: any;

  constructor(
    public _userServices: UsuarioService,
    public router: Router
    ) {
    this.recordar = false;
  }


  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if ( this.email.length > 0 ) {
      this.recordar = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '683226299239-sj6n4ui04u9d2hvl46st658guv1s2al9.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin(document.getElementById('btnGoogle'));

    });
  }

  attachSignin( element ) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {

      // const profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;
 
      // console.log(token);

      this._userServices.loginGoogle(token)
        .subscribe( () => {window.location.href = '#/dashboard';
        });
    }
    );
  }

  ingresar(forma: NgForm) {
    // console.log('Funcion de ingresar');
    // console.log(forma.value);

    const usuario = new Usuario(
      null,
      forma.value.email,
      forma.value.password
    );

    this._userServices.login(usuario, this.recordar)
      .subscribe(
        ok => {
          this.router.navigate(['/dashboard']);
        }
      );
  }

}
