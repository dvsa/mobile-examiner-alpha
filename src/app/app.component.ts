import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Page } from 'ionic-angular/navigation/nav-util';
import { LoginPage } from '../pages/login/login';
import { JournalPage } from '../pages/journal/journal';

export interface IPage {
  title: string;
  iconAttr: string;
  icon: string;
  component: Page;
}

@Component({
  templateUrl: 'app.html'
})
export class App {
  @ViewChild('content') nav: NavController;
  rootPage: any = LoginPage;
  navOpen: boolean = true;
  activePage: Page;

  pages: IPage[];

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.overlaysWebView(false);
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Journal', iconAttr: 'name', icon: 'calendar', component: JournalPage },
      {
        title: 'Show/Tell me',
        iconAttr: 'ios',
        icon: 'ios-help-circle-outline',
        component: LoginPage
      },
      { title: 'Routes', iconAttr: 'name', icon: 'map', component: LoginPage },
      { title: 'Contact', iconAttr: 'name', icon: 'contact', component: LoginPage }
    ];
  }

  loadPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  isActivePage(page) {
    return this.activePage === page;
  }

  setNavState() {
    this.navOpen = !this.navOpen;
  }

  isNavOpen() {
    return this.navOpen;
  }
}
