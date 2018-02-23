import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ManoeuvrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manoeuvre',
  templateUrl: 'manoeuvre.html',
})
export class ManoeuvrePage {

  public data = [{
    "name" : "Controlled Stop"
  }, {
    "name": "Reverse Right",
    "marks": ["Control", "Observation"]
  },{
    "name": "Reverse Park",
    "marks": ["Control", "Observation"]
  },{
    "name" : "Vehicle Check"
  },{
    "name" : "Forward Park"
  },{
    "name" : "Precautions"
  }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addFault(type) {
    console.log('recording a fault');
  }

  removeFault(type) {
    console.log('removing a fault');
  }

  addSerious(type) {
    console.log('recording a serious fault');
  }

  addDangerous(type) {
    console.log('recording a dangerous fault');
  }

}
