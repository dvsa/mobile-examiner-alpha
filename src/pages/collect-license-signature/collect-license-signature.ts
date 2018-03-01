import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WeatherPhysicalDescriptionPage } from '../weather-physical-description/weather-physical-description';

/**
 * Generated class for the CollectLicenseSignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-collect-license-signature',
  templateUrl: 'collect-license-signature.html',
})
export class CollectLicenseSignaturePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectLicenseSignaturePage');
  }

  goToWeatherPhysicalDescription() {
    this.navCtrl.push(WeatherPhysicalDescriptionPage);
  }

}
