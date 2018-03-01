import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  title: string = 'Login';

  constructor(public navCtrl: NavController) {

  }

  goToDashboard() {
    this.navCtrl.push(DashboardPage);
  }

}
