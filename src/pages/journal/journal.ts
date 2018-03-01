import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InitiateSwapPage } from '../initiate-swap/initiate-swap';
import { CandidateInfoPage } from '../candidate-info/candidate-info';

@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html',
})
export class JournalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JournalPage');
  }

  goToCandidateInfo() {
    this.navCtrl.push(CandidateInfoPage);
  }

  goToInitiateSwap() {
    this.navCtrl.push(InitiateSwapPage);
  }

}
