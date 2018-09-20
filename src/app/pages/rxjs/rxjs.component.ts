import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, retry, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
   
    this.subscription = this.regresaObservable()
    .subscribe(
      numero => {console.log('Subs: ', numero); },
      error => {console.error('ERROR en OBS', error); },
      () => console.log('EL observador termino.')
      );


  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    console.log('Cambiando de pagina');
    this.subscription.unsubscribe();
    
  }

  regresaObservable(): Observable<any> {

    return   new Observable( observer => {
      let cont = 0;
      const inter = setInterval( () => {
        cont += 1;

        const salida = {
          valor: cont
        };

        observer.next( salida );

        // if ( cont === 3 ) {
        //   clearInterval(inter);
        //   observer.complete();
        // } 
        // if ( cont === 2 ) {
        //   clearInterval(inter);
        //   observer.error('auxilio');
        // }
      }, 500);
    }).pipe(
      retry(2),
      map( (resp: any) => {
        return resp.valor;
      }),
      filter( (valor, index) => {
        // console.log('Filter:', valor, index);
        if  ( (valor % 2) === 1 ) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })
      );
 
  }
}
