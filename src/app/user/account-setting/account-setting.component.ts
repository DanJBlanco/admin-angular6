import { SettingsService } from './../../services/service.index';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


declare function init_plugins();

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: []
})
export class AccountSettingComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document,
              public _ajustes: SettingsService
  ) { }

  ngOnInit() {
    init_plugins();
  }

  getTema(tema: string, ref: any) {

    // const url_tema =  `assets/css/colors/${tema}.css`;
    this.aplicarCheck( ref );
    this._ajustes.ajustes.urlTema = `assets/css/colors/${tema}.css`;
    this._ajustes.ajustes.tema = tema;
    this._ajustes.setSettings();
    // this._document.getElementById('tema').setAttribute( 'href', url_tema );

    // console.log(tema);

  }

  aplicarCheck( ref: any ) {
    const tags: any = document.getElementsByClassName('selector');
    for (const tag of tags) {
      tag.classList.remove('working');
    }
    ref.classList.add('working');
  }

  setCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this._ajustes.ajustes.tema;
    for (const selector of selectores) {
      // selector.classList.remove('working');
        if ( selector.getAttribute('data-theme') === tema ) {
          selector.classList.add('working');
          break;
        }
    }
  }
}
