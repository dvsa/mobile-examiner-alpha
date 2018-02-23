import { LegalPage } from './../pages/legal/legal';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TablePage } from '../pages/table/table';
import { IFormPage, IFormItem } from '../sheared/interfaces';
import { FailCounter } from '../pages/fail-counter/fail-counter';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {  
  @ViewChild('myNav') nav: NavController;
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.overlaysWebView(false);

      splashScreen.hide();
    });
  }

  goHome() {
    this.menu.close();
    this.nav.popTo(HomePage);
  }
}