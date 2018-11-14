import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, coleccion: string = 'usuarios' ): any {

    const url = URL_SERVICIOS + '/img';
    if ( !img ) {
      return url + '/usuarios/imagen-defecto';
    }
    if ( img.indexOf('https') >= 0 ) {
      return img;
    }



    return url + '/' + coleccion + '/' + img;
  }

}
