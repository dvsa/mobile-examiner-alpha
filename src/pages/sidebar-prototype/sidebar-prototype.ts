import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IFormPage, IFormItem } from '../../sheared/interfaces';
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
      pageName: 'Controlled stop',
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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
      pageName: 'Clearance/obstructions',
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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
      page: TablePage,
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