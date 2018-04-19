import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { Content } from 'ionic-angular/navigation/nav-interfaces';
import { DEFAULT_LANG } from './constants';
import { TranslateService } from 'ng2-translate';

@Component({
  templateUrl: 'app.html'
})
export class App {
  @ViewChild('content') nav: NavController;
  @ViewChild('ionContent') ionContent: Content;
  rootPage: any = LoginPage;
  canShowHeader = false;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    translate: TranslateService
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.overlaysWebView(false);
      splashScreen.hide();
    });
    translate.setDefaultLang(DEFAULT_LANG);
  }

  ngAfterViewInit() {
    this.nav.viewWillEnter.subscribe((viewController: ViewController) => {
      this.canShowHeader = viewController.name === 'AllOnOnePage';
      this.ionContent.resize();
    });
  }
}
