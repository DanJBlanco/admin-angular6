import { UsuarioService } from './../../services/service.index';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.models';

declare function init_plugins();
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor(
    public _usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    init_plugins();
    this.usuario = this._usuarioService.usuario;
  }

}
