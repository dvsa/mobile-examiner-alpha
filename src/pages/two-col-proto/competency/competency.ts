import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-competency',
  templateUrl: 'competency.html',
})
export class CompetencyPage {

  public data1 = [{
    "name": "control",
    "marks": [{
      "name": "accelerator",
      "fault": 0,
      "serious": 0,
      "dangerous": 0
    },{
      "name": "clutch",
      "fault": 0,
      "serious": 0,
      "dangerous": 0
    },{
      "name": "gears",
      "fault": 0,
      "serious": 0,
      "dangerous": 0
    },{
      "name": "footbrake",
      "fault": 0,
      "serious": 0,
      "dangerous": 0
    },{
      "name": "parking break",
      "fault": 0,
      "serious": 0,
      "dangerous": 0
    },{
      "name": "steering",
      "fault": 0,
      "serious": 0,
      "dangerous": 0
    }]
  }];
  public data2 = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
