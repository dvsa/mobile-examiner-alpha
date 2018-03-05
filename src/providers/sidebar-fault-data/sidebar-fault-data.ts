import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NotesPage } from '../../pages/notes/notes';
import { SidebarGridComponent } from '../../components/sidebar-grid/sidebar-grid';
import _ from 'lodash';

/*
  Generated class for the SidebarFaultDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SidebarFaultDataProvider {

  change: Subject<any> = new Subject<any>();

  constructor() {
    console.log(_);
    console.log(this.formSections);
  }

  removeDrivingFault(sectionName, subSectionName, faultName) {
    const section = _.find(this.formSections, section => section.pageName === sectionName);
    const subSections = _.get(section, 'pageOptions.sections');
    if (subSections.length > 1) {
      console.log(subSectionName);
      let subSection = _.find(subSections, subSection => subSection.header === subSectionName);
      console.log(subSection)
      const item = _.find(subSection.items, item => item.name === faultName);
      return item.counter--;
    } else {
      const item = _.find(subSections[0].items, item => item.name === faultName);
      return item.counter--;
    }
  }

  formSections: any[] = [
    {
      pageName: 'Controlled stop',
      page: SidebarGridComponent,
      pageOptions: {
        sections: [
          {
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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
            header: '',
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

function createFailCounter(name: string): any {
  return {
      name: name, counter: 0, isSerious: false, isDangerous: false
  };
}
