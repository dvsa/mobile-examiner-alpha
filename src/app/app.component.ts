import { LegalPage } from './../pages/legal/legal';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
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
  rootPage: any = HomePage;
  tableP: any = TablePage;

  @ViewChild('content') _NAV: NavController
  categories: string[] = ["Manoeuvers", "Control", "Moving Off", "Mirrors", "Signalling", "Response to signs", "Speed", "Junctions", "Judgement", "Positioning", "Corissings"];
  formSections: any[] = [
    {
      pageName: "Eye sight",
      page: TablePage,
      pageOptions: {
        sections: [
          {
            // TODO
            header: "Eyesight correct",
            items: [
              createFailCounter("Control")
            ]
          }
        ]
      },
    },
    {
      pageName: "Legal requirements",
      page: LegalPage,
      pageOptions: {
      },
    },
    {
      pageName: "Manoeuvres",
      page: TablePage,
      pageOptions: {
        sections: [
          {
            header: "Controlled Stop",
            items: [
              createFailCounter("Promptness"),
              createFailCounter("Control")
            ]
          },
          {
            header: "Reverse Right",
            items: [
              createFailCounter("Control"),
              createFailCounter("Observations")
            ]
          },
          {
            header: "Reverse Left",
            items: [
              createFailCounter("Control"),
              createFailCounter("Observations")
            ]
          },
          {
            header: "Turn in Road",
            items: [
              createFailCounter("Control"),
              createFailCounter("Observations")
            ]
          }
        ]
      },
    },
    {
      pageName: "Control",
      page: TablePage,
      pageOptions: {
        sections: [
          {
            header: " ",
            items: [
              createFailCounter("Accelerator"),
              createFailCounter("Clutch"),
              createFailCounter("Gears"),
              createFailCounter("Footbrake"),
              createFailCounter("Parking Brake"),
              createFailCounter("Steering"),
              createFailCounter("Balance M/C"),
            ]
          }
        ]
      },
    },
    {
      pageName: "Speed",
      page: TablePage,
      pageOptions: {
        sections: [
          {
            header: " ",
            items: [
              createFailCounter("Use of speed"),
              createFailCounter("Following Distance"),
              createFailCounter("Appropriate Speed"),
              createFailCounter("Undue hesitation")
            ]
          }
        ]
      },
    }
  ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  sectionToLoad(formPage: IFormPage) {
    this._NAV.setRoot(formPage.page, { options: formPage });
    // this._NAV.setRoot(formPage.page, { options: {pageName: formPage.pageName, pageOptions: formPage.pageOptions} });
  }
}

function createFailCounter(name: string): IFormItem | any {
  return {
    name: name, counter: 0, isSerious: false, isDangerous: false
  };
}