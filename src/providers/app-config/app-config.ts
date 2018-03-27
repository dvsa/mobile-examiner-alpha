import { Injectable } from '@angular/core';

/*
  Generated class for the AppConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppConfigProvider {

  signaturePadOptions: any = {
    minWidth: 5,
    canvasWidth: 500,
    canvasHeight: 300,
    throttle: 0,
    backgroundColor: '#ffffff'
  };
  navAnimationDelay: number = 700;

  constructor() {
  }

  getSignaturePadOptions() {
    return this.signaturePadOptions;
  }

  getNavAnimationDelay() {
    return this.navAnimationDelay;
  }

}
