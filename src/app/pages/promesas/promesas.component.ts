import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {


  constructor() {

    this.contarTres()
    .then( (mensaje) => console.log('Termino', mensaje ))
    .catch( (error) => console.error('ERROR', error));

   }

  ngOnInit() {
  }

  contarTres() {
    return new Promise((resolve, reject) => {

      let contador = 0;
      const intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve('OK!');
          // reject('Another brick in the wall');
          clearInterval(intervalo);

        }
      }, 1000);
    });
  }

}
