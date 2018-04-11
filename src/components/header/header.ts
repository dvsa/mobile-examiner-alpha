import { Component } from '@angular/core';
import { App } from 'ionic-angular';

@Component({
  selector: 'mes-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  constructor(private app: App) {
  }

  goHome() {
    this.app.getActiveNavs()[0].popToRoot()
  }
}
