import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the BackLinkComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'back-link',
  templateUrl: 'back-link.html'
})
export class BackLinkComponent {

  constructor(public navCtrl: NavController) {
  }

  goBack() {
    this.navCtrl.pop();
  }

}
