import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JournalPage } from '../journal/journal';
import { Page } from 'ionic-angular/navigation/nav-util';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  title: string = 'Login';
  journalPage: Page = JournalPage;

  constructor(public navCtrl: NavController) {
  }

}
