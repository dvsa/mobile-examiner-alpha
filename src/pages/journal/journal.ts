import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InitiateSwapPage } from '../initiate-swap/initiate-swap';
import { CandidateInfoPage } from '../candidate-info/candidate-info';
import { Page } from 'ionic-angular/navigation/nav-util';

@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html',
})
export class JournalPage {

  candidateInfoPage: Page = CandidateInfoPage;
  initiateSwapPage: Page = InitiateSwapPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JournalPage');
  }

}
