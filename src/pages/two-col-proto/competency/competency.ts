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
    "name": "clearance/obs"
  },{
    "name": "Response to signs",
    "marks": ["traffic signals", "road markings", "traffic lights", "traffic controls", "other road users"]
  }
];
  public data2 = [{
    "name": "Use of speed"
  }, {
    "name": "Following distance"
  }, {
    "name": "Progress",
    "marks": ["appropriate speed", "undue hesitation"]
  },{
    "name": "Junctions",
    "marks": ["approach speed", "observation", "turning right", "turning left", "cutting corners"]
  }, {
    "name": "Judgment",
    "marks": ["overtaking", "meeting", "crossing"]
  },{
    "name": "Positioning",
    "marks": ["normal driving", "lane discipline"]
  },{
    "name": "Pedestrian crossing"
  },{
    "name": "Position / normal stops"
  }, {
    "name": "Awareness / planning"
  }, {
    "name": "Ancillary controls"
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
