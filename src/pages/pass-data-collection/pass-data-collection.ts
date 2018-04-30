import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HealthDeclarationPage } from '../health-declaration/health-declaration';
import { Page } from 'ionic-angular/navigation/nav-util';

@IonicPage()
@Component({
  selector: 'page-pass-data-collection',
  templateUrl: 'pass-data-collection.html',
})
export class PassDataCollectionPage {

  healthDeclarationPage: Page = HealthDeclarationPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  provisionalInputChanged(event, secondInput) {
    secondInput.checked = false;
  }

}
