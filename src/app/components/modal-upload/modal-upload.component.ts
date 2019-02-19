import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../services/service.index';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  oculto = '';
  imagenCargar: File;
  imagenTemp: string;


  constructor(
    public _subirArcivoService: SubirArchivoService,
    public _modalUploadService: ModalUploadService
  ) {
    console.log('Modal Listo');
   }

  ngOnInit() {
  }

  cerrarModal() {
    this.imagenTemp = null;
    this.imagenCargar = null;

    this._modalUploadService.ocultarModal();
  }

  seleccionImagen( archivo: File ) {

    if ( !archivo ) {
      this.imagenCargar = null;
      return;
    }

    if  ( archivo.type.indexOf('image') < 0 ) {
      swal('Solo Imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenCargar = null;
      return;
    }

    const reader = new FileReader();
    // const urlImagenTemp = reader.readAsDataURL( archivo );
    reader.readAsDataURL(  archivo );
    reader.onload = () => {
      // console.log(reader.result);
      this.imagenTemp = reader.result;

    };
    // console.log(archivo);
    this.imagenCargar = archivo;

  }

  subirImagen() {
    this._subirArcivoService.subirArchivo(this.imagenCargar, this._modalUploadService.tipo, this._modalUploadService.id)
          .then( (resp) => {
            console.log( resp );
            this._modalUploadService.noticificacion.emit( resp );
            // this._modalUploadService.ocultarModal();
            this.cerrarModal();

          })
          .catch( (err) => {
            console.log('Error en la carga de imagen');

          });
  }

}
