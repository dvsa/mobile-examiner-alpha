import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IFormPage, IFormItem } from '../../sheared/interfaces';
import { NotesPage } from '../notes/notes';
import { SidebarGridComponent } from '../../components/sidebar-grid/sidebar-grid';
import _ from 'lodash';

@Component({
  selector: 'page-sidebar-prototype',
  templateUrl: 'sidebar-prototype.html',
})
export class SidebarPrototypePage {

  @ViewChild('content') _NAV: NavController

  activeSection: string;
  testStarted: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.activeSection = 'Precautions';
    this.sectionToLoad(this.formSections[3]);
  }

  sectionToLoad(formPage: IFormPage) {
    this.testStarted = true;
    this._NAV.setRoot(formPage.page, { options: formPage });
    setTimeout(() => this.activeSection = formPage.pageName, 150);
  }

  isActive(pageName: string) {
    return pageName === this.activeSection ? 'active menu-item' : 'menu-item';
  }

  sumSectionFaults(sectionName: string): number {
    const section: Object = _(this.formSections).find(section => section.pageName === sectionName);
    const sectionFaults = _(section).get('pageOptions.sections');
    const items = _(sectionFaults).flatMap('items');
    return items
      .map('counter')
      .reduce((acc, prev) => acc + prev);
  }

  formSections: any[] = [
    {
      pageName: 'Controlled stop',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Controlled stop')
            ]
          }
        ]
      },
    },
    {
      pageName: 'Manoeuvres',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: 'Reverse Right',
            items: [
              createFailCounter('Control'),
              createFailCounter('Observations')
            ]
          },
          {
            header: 'Reverse Left',
            items: [
              createFailCounter('Control'),
              createFailCounter('Observations')
            ]
          },
          {
            header: 'Forward Park',
            items: [
              createFailCounter('Control'),
              createFailCounter('Observations')
            ]
          }
        ]
      },
    },
    {
      pageName: 'Show me',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Show me')
            ]
          }
        ]
      },
    },
    {
      pageName: 'Precautions',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Precautions')
            ]
          }
        ]
      },
    },
    {
      pageName: 'Control',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Accelerator'),
              createFailCounter('Clutch'),
              createFailCounter('Gears'),
              createFailCounter('Footbrake'),
              createFailCounter('Parking Brake'),
              createFailCounter('Steering')
            ]
          }
        ]
      },
    },
    {
      pageName: 'Move off',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Safety'),
              createFailCounter('Control')
            ]
          }
        ]
      },
    },
    {
      pageName: 'Use of mirrors',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Signalling'),
              createFailCounter('Change direction'),
              createFailCounter('Change speed')
            ]
          }
        ]
      },
    },
    {
      pageName: 'Signals',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Necessary'),
              createFailCounter('Correctly'),
              createFailCounter('Timed')
            ]
          }
        ]
      },
    },
    {
      pageName: 'Clearance',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Clearance/obstructions')
            ]
          }
        ]
      },
    },
    {
      pageName: 'Response to signs',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Traffic signs'),
              createFailCounter('Road markings'),
              createFailCounter('Traffic lights'),
              createFailCounter('Traffic controllers'),
              createFailCounter('Other road users'),
            ]
          }
        ]
      },
    },
    {
      pageName: 'Use of speed',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Use of speed'),
            ]
          }
        ]
      },
    },
    {
      pageName: 'Following distance',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Following distance'),
              createFailCounter('Appropriate Speed'),
              createFailCounter('Undue hesitation')
            ]
          }
        ]
      },
    },
    {
      pageName: 'Progress',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Appropriate Speed'),
              createFailCounter('Undue hesitation')
            ]
          }
        ]
      },
    },
    {
      pageName: 'Junctions',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Approach speed'),
              createFailCounter('Observation'),
              createFailCounter('Turning right'),
              createFailCounter('Turning left'),
              createFailCounter('Cutting corners'),
            ]
          }
        ]
      },
    },
    {
      pageName: 'Judgement',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Overtaking'),
              createFailCounter('Meeting'),
              createFailCounter('Crossing'),
            ]
          }
        ]
      },
    },
    {
      pageName: 'Positioning',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Normal driving'),
              createFailCounter('Lane discipline'),
              createFailCounter('Predestian crossings'),
              createFailCounter('Position/normal stops'),
            ]
          }
        ]
      },
    },
    {
      pageName: 'Pedestrian crossings',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Pedestrian crossings')
            ]
          }
        ]
      },
    },
    {
      pageName: 'Position / normal stops',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Precautions')
            ]
          }
        ]
      },
    },
    {
      pageName: 'Awareness/Planning',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Awareness/Planning')
            ]
          }
        ]
      },
    },
    {
      pageName: 'Ancillary controls',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: ' ',
            items: [
              createFailCounter('Ancillary controls')
            ]
          }
        ]
      },
    },
    {
      pageName: 'Notes',
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