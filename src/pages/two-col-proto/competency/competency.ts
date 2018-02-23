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
    "marks": ["accelerator","clutch","gears","footbrake","parking brake","steering"]
  }, {
    "name": "Move off",
    "marks": ["safety","control"]
  },{
    "name": "Use of mirrors",
    "marks": ["signalling", "change direction", "change speed"]
  },
  {
    "name": "Signals",
    "marks": ["necessary", "correctly", "timed"]
  },
  {
    "name": "clearance/obstructions"
  },
  {
    "name": "Response to signs",
    "marks": ["traffic signals", "road markings", "traffic lights", "traffic controls", "other road users"]
  }
];
  public data2 = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
