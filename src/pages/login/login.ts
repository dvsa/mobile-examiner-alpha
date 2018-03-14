import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { Page } from 'ionic-angular/navigation/nav-util';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  title: string = 'Login';
  dashboardPage: Page = DashboardPage;

  constructor(public navCtrl: NavController) {
  }

}
