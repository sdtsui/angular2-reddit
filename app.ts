// <reference path="typings/angular2/angular2.d.ts"/>

import {
  Component,
  View,
  For,
  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'hello-world'
})
@View({
  directives: [For],
  template: `
    <ul>
      <li *for="#name of names"> Hello {{ name }}
      </li>
    </ul>
  `
})
class HelloWorld {
  names: Array<string>;

  constructor() {
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
  }
}
bootstrap(HelloWorld);