import { Component, OnInit } from '@angular/core';


declare function init_plugins();

@Component({
  selector: 'app-nopage404',
  templateUrl: './nopage404.component.html',
  styles: []
})
export class Nopage404Component implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
