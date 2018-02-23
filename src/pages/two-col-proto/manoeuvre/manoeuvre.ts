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
    "name" : "Controlled Stop",
    "fault": 0,
    "serious": 0,
    "dangerous": 0
  }, {
    "name": "Reverse Right",
    "marks": [{
      "name": "Control",
      "fault": 0,
      "serious": 0,
      "dangerous": 0
    },{
      "name": "Observation",
      "fault": 0,
      "serious": 0,
      "dangerous": 0
    }]
  },{
    "name": "Reverse Park",
    "marks": [{
      "name": "Control",
      "fault": 0,
      "serious": 0,
      "dangerous": 0
    },{
      "name": "Observation",
      "fault": 0,
      "serious": 0,
      "dangerous": 0
    }]
  },{
    "name" : "Vehicle Check",
    "fault": 0,
    "serious": 0,
    "dangerous": 0
  },{
    "name" : "Forward Park",
    "fault": 0,
    "serious": 0,
    "dangerous": 0
  },{
    "name" : "Precautions",
    "fault": 0,
    "serious": 0,
    "dangerous": 0
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
