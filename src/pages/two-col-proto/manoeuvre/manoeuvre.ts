import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FaultsScorecardProvider } from '../../../providers/faults-scorecard/faults-scorecard';

@IonicPage()
@Component({
  selector: 'page-manoeuvre',
  templateUrl: 'manoeuvre.html',
})
export class ManoeuvrePage {

  serious: boolean;
  dangerous: boolean;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private faultsService: FaultsScorecardProvider ) {
  }

  addDrivingFault() {
    this.faultsService.addDrivingFault();
  }

  removeDrivingFault() {
    this.faultsService.removeDrivingFault();
  }

  updateSerious() {
    if (!this.serious) return this.faultsService.removeSerious();
    return this.faultsService.addSerious();
  }

  updateDangerous() {
    if (!this.dangerous) return this.faultsService.removeDangerous();
    return this.faultsService.addDangerous();
  }

}
