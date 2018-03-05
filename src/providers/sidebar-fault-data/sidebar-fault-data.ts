import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { TablePage } from '../../components/table/table';
import { NotesPage } from '../../pages/notes/notes';

/*
  Generated class for the SidebarFaultDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SidebarFaultDataProvider {

  change: Subject<any> = new Subject<any>();

  formSections: any[] = [
      {
          pageName: 'Manoeuvres',
          page: TablePage,
          pageOptions: {
              sections: [
                  {
                      header: 'Controlled Stop',
                      items: [
                          createFailCounter('Promptness'),
                          createFailCounter('Control')
                      ]
                  },
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
                      header: 'Turn in Road',
                      items: [
                          createFailCounter('Control'),
                          createFailCounter('Observations')
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
          pageName: 'Speed',
          page: TablePage,
          pageOptions: {
              sections: [
                  {
                      header: ' ',
                      items: [
                          createFailCounter('Use of speed'),
                          createFailCounter('Following Distance'),
                          createFailCounter('Appropriate Speed'),
                          createFailCounter('Undue hesitation')
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
