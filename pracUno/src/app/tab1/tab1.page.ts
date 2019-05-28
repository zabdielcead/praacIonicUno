import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {
  /*
    ionic 4 implementa angular ciclos de vida
    debugger es un breakpoint
  */
  constructor() {}

  ngOnInit() {
    let numero = 10;
    // tslint:disable-next-line:no-debugger
    debugger;
    numero += 10;
    numero *= 2;
    console.log({ numero }); // aparecera en consola el numero y la varible
  }

}
