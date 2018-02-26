import { Injectable } from '@angular/core';
import faultData from '../../pages/dl25-buttons-modals/fault-data';
import { Subject } from 'rxjs/Subject';
import _ from 'lodash';

@Injectable()
export class FaultDataProvider {

  faultData: any = faultData;
  change: Subject<any> = new Subject<any>();

  constructor() {
    this.addFaultMaps();
  }

  getFaultData() {
    return this.faultData;
  }

  addFaultMaps() {
    _(this.faultData) 
      .each(column => {
        _(column).each(fault => {
          fault.faults = {
            df: 0,
            s: false,
            d: false
          }
        });
      });
  }

  getFault(faultTitle: string, title: string, action: string) {
    if (typeof title === 'undefined') {
      if (action === 'addDrivingFault') {
        return _(this.faultData)
        .filter(column => column.some(faultItem => faultItem.title === faultTitle))
        .first()
        .filter(faultItem => faultItem.title === faultTitle)[0]
        .faults.df++;
      }
      if (action === 'removeDrivingFault') {
        return _(this.faultData)
        .filter(column => column.some(faultItem => faultItem.title === faultTitle))
        .first()
        .filter(faultItem => faultItem.title === faultTitle)[0]
        .faults.df--;
      }
      if (action === 'addSerious') {
        return _(this.faultData)
        .filter(column => column.some(faultItem => faultItem.title === faultTitle))
        .first()
        .filter(faultItem => faultItem.title === faultTitle)[0]
        .faults.s = true;
      }
      if (action === 'removeSerious') {
        return _(this.faultData)
        .filter(column => column.some(faultItem => faultItem.title === faultTitle))
        .first()
        .filter(faultItem => faultItem.title === faultTitle)[0]
        .faults.s = false;
      }
      if (action === 'addDangerous') {
        return _(this.faultData)
        .filter(column => column.some(faultItem => faultItem.title === faultTitle))
        .first()
        .filter(faultItem => faultItem.title === faultTitle)[0]
        .faults.d = true;
      }
      if (action === 'removeDangerous') {
        return _(this.faultData)
        .filter(column => column.some(faultItem => faultItem.title === faultTitle))
        .first()
        .filter(faultItem => faultItem.title === faultTitle)[0]
        .faults.d = false;
      }
      if (action === null) {
        return _(this.faultData)
        .filter(column => column.some(faultItem => faultItem.title === faultTitle))
        .first()
        .filter(faultItem => faultItem.title === faultTitle)[0];
      }
    } else {

    }
  }

  addDrivingFault(faultTitle, title) {
    this.getFault(faultTitle, title, 'addDrivingFault');
    this.change.next(this.faultData);
  }

  removeDrivingFault(faultTitle, title) {
    this.getFault(faultTitle, title, 'removeDrivingFault');
    this.change.next(this.faultData);
  }

  addSerious(faultTitle, title) {
    this.getFault(faultTitle, title, 'addSerious');
    this.change.next(this.faultData);
  }

  removeSerious(faultTitle, title) {
    this.getFault(faultTitle, title, 'removeSerious');
    this.change.next(this.faultData);
  }

  addDangerous(faultTitle, title) {
    this.getFault(faultTitle, title, 'addDangerous');
    this.change.next(this.faultData);
  }

  removeDangerous(faultTitle, title) {
    this.getFault(faultTitle, title, 'removeDangerous');
    this.change.next(this.faultData);
  }

}
