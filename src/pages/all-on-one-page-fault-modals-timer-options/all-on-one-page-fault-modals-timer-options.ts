import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FaultModeProvider } from '../../providers/fault-mode/fault-mode';

/**
 * Generated class for the AllOnOnePageFaultModalsTimerOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-all-on-one-page-fault-modals-timer-options',
  templateUrl: 'all-on-one-page-fault-modals-timer-options.html',
})
export class AllOnOnePageFaultModalsTimerOptionsPage {

  faultModeDelayInSeconds: number;
  delay: number;
  faultModeDelay: number;
  delayInSeconds: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public faultModeService: FaultModeProvider,
    public viewCtrl: ViewController) {
      this.delay = this.faultModeService.resetDelay;
      this.faultModeDelay = this.faultModeService.resetFaultModeDelay;
      this.getDelayInSeconds(this.delay);
      this.getFaultModeDelayInSeconds(this.faultModeDelay);

  }

  onChange($event) {
    this.getDelayInSeconds(this.delay);
  }

  onFaultModeDelayChange($event) {
    this.getFaultModeDelayInSeconds(this.faultModeDelay);
  }
  
  confirm() {
    this.faultModeService.setResetDelay(this.delay);
    this.faultModeService.setFaultModeResetDelay(this.faultModeDelay);
    this.closeModal();
  }

  cancel() {
    this.closeModal();
  }

  closeModal() {
    this.viewCtrl.dismiss();
   }

   getFaultModeDelayInSeconds(ms: number) {
    const s = ms / 1000;
    this.faultModeDelayInSeconds = s;
   }

  getDelayInSeconds(ms: number) {
    const s = ms / 1000;
    this.delayInSeconds = +s.toFixed(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllOnOnePageFaultModalsTimerOptionsPage');
  }

}
