import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() porcentaje: number = 50;
  @Input() leyenda: string = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {
    console.log('Leyenda: ', this.leyenda);
    console.log('Porcentaje: ', this.porcentaje);

  }

  ngOnInit() {
  }

  cambiarValor(num: number){
      if (this.porcentaje >= 100 && num > 0) {
        return;
      }

      if (this.porcentaje <= 0 && num < 0) {
        return;
      }
      this.porcentaje = this.porcentaje + num;

      this.cambioValor.emit(this.porcentaje);
      this.txtProgress.nativeElement.focus();
    }

    onChange(newValue: number) {

      // const elemHTML: any = document.getElementsByName ('progreso')[0];

      if ( newValue >= 100 ) {
        this.porcentaje = 100;
      } else if ( newValue <= 0 ) {
        this.porcentaje = 0;
      } else {
        this.porcentaje = newValue;
      }
      // elemHTML.value = this.porcentaje;
      // console.log(newValue);
      this.txtProgress.nativeElement.value = this.porcentaje;
      this.cambioValor.emit(this.porcentaje);
    }

}
