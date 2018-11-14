import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string;

  constructor(
    private router: Router,
    public _title: Title,
    public _meta: Meta,
    ) {

    this.getDataRouter().subscribe( data => {
      // console.log( data );
      this.label = data.titulo;
      this._title.setTitle(this.label);

      const metaTag: MetaDefinition = {
        name: 'descrption',
        content: this.label
      };

      this._meta.updateTag( metaTag );
    });
   }

  ngOnInit() {
  }

  getDataRouter() {
    return this.router.events.pipe(
      filter(( event ) =>  event instanceof ActivationEnd ),
      filter( ( event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( ( event: ActivationEnd) => event.snapshot.data )
    );
  }
}
