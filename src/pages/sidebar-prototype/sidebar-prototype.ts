import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IFormPage, IFormItem } from '../../sheared/interfaces';
import { LegalPage } from '../legal/legal';
import { TablePage } from '../../components/table/table';
import { NotesPage } from '../notes/notes';

@Component({
  selector: 'page-sidebar-prototype',
  templateUrl: 'sidebar-prototype.html',
})
export class SidebarPrototypePage {
  @ViewChild('content') _NAV: NavController

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.sectionToLoad(this.formSections[0]);
  }

  sectionToLoad(formPage: IFormPage) {
    this._NAV.setRoot(formPage.page, { options: formPage });
  }

  formSections: any[] = [
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
    },
    {
      pageName: "Response to signs",
      page: TablePage,
      pageOptions: {
        sections: [
          {
            header: " ",
            items: [
              createFailCounter("Traffic signs"),
              createFailCounter("Road markings"),
              createFailCounter("Traffic lights"),
              createFailCounter("Traffic controllers"),
              createFailCounter("Other road users"),
            ]
          }
        ]
      },
    },
    {
      pageName: "Junctions",
      page: TablePage,
      pageOptions: {
        sections: [
          {
            header: " ",
            items: [
              createFailCounter("Approach speed"),
              createFailCounter("Observation"),
              createFailCounter("Turning right"),
              createFailCounter("Turning left"),
              createFailCounter("Cutting corners"),
            ]
          }
        ]
      },
    },
    {
      pageName: "Judgement",
      page: TablePage,
      pageOptions: {
        sections: [
          {
            header: " ",
            items: [
              createFailCounter("Overtaking"),
              createFailCounter("Meeting"),
              createFailCounter("Crossing"),
            ]
          }
        ]
      },
    },
    {
      pageName: "Notes",
      page: NotesPage,
      pageOptions: {
        sections: [
          { text: 'My typed notes...' }
        ]
      },
    }
  ]

}

function createFailCounter(name: string): IFormItem | any {
  return {
    name: name, counter: 0, isSerious: false, isDangerous: false
  };
}