import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  ajustes: Ajustes = {
    urlTema: 'assets/css/colors/default-dark.css',
    tema: 'default-dark',
  };

  constructor() { }

  setSettings() {
    localStorage.setItem('settings', JSON.stringify(this.ajustes));
    document.getElementById('tema').setAttribute( 'href', this.ajustes.urlTema );
  }

  getSettings() {
    if ( localStorage.getItem('settings') ) {
      this.ajustes = JSON.parse(localStorage.getItem('settings'));
    }
    document.getElementById('tema').setAttribute( 'href', this.ajustes.urlTema );
  }
}


interface Ajustes {
  urlTema: string;
  tema: string;
}
