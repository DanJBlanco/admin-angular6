import { Injectable } from '@angular/core';
import { resolve } from 'q';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }

  subirArchivo( archivo: File, coleccion: string, id: string ) {

    return new Promise( (resolve, reject ) => {

        const formData = new FormData();
        const xhr = new XMLHttpRequest();

        formData.append('imagen', archivo, archivo.name);

        xhr.onreadystatechange = function () {

          if ( xhr.readyState === 4 ) {
            if ( xhr.status === 200 ) {
              console.log('Imagen subida');
              resolve( JSON.parse(xhr.response));
            } else {
              console.log('Error al subir imagen');
              reject( xhr.response );
            }

          }
        }

        const url = URL_SERVICIOS + '/upload/' + coleccion + '/' + id;

        xhr.open('PUT', url, true);
        xhr.send(formData);

      });
    }
}
