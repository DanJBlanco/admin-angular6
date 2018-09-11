import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  porcentaje1: number = 50;
  porcentaje2: number = 50;

  constructor() { }

  ngOnInit() {
  }

  actualizarProgress(event: any) {
    console.log('Evento: ', event);
  }
  // cambiarValor(num: number){
  //   if(this.porcentaje >= 100 && num > 0) {
  //     return;
  //   }

  //   if(this.porcentaje <= 0) {
  //     return;
  //   }
  //   this.porcentaje = this.porcentaje + num;
  // }

}
