import { Component } from '@angular/core';

interface ILegals {
  id: string;
  name: string;
  complete: boolean;
}
@Component({
  selector: 'legal-requirements',
  templateUrl: 'legal-requirements.html'
})
export class LegalRequirementsComponent {
  requirements: ILegals[] = [
    {
      id: 'stop1',
      name: 'Normal Stop 1',
      complete: false
    },
    {
      id: 'stop2',
      name: 'Normal Stop 1',
      complete: false
    },
    {
      id: 'angled',
      name: 'Angled Start',
      complete: false
    },
    {
      id: 'hill',
      name: 'Hill Start',
      complete: false
    }
  ];

  constructor() {}

  hasMetReq(reqId) {
    return this.requirements.find((req) => req.id === reqId).complete;
  }

  setReq(reqId) {
    const updatedRequirements: any = this.requirements.map((req) => {
      if (req.id === reqId) {
        req.complete = req.complete ? false : true;
      }

      return req;
    });
    this.requirements = updatedRequirements;
  }
}
