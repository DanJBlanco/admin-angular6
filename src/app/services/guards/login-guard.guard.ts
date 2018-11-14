import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    public _userService: UsuarioService,
    public router: Router
    ) {

  }


  canActivate() {

    if (this._userService.estaLogeado()) {
      console.log('Paso el guard');
      
      return true;
      
    } else {
      console.log('Bloquead por el guard');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
