import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TwoColPage } from "../two-col-proto/two-column/two-col";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  twoColPage = TwoColPage;

  constructor(public navCtrl: NavController) {

  }

}
