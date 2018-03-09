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

  delay: number;
  delayInSeconds: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public faultModeService: FaultModeProvider,
    public viewCtrl: ViewController) {
  }

  onChange($event) {
    this.getDelayInSeconds(this.delay);
  }
  
  confirm() {
    this.faultModeService.setResetDelay(this.delay);
    this.closeModal();
  }

  cancel() {
    this.closeModal();
  }

  closeModal() {
    this.viewCtrl.dismiss();
   }

  getDelayInSeconds(ms: number) {
    const s = ms / 1000;
    this.delayInSeconds = +s.toFixed(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllOnOnePageFaultModalsTimerOptionsPage');
  }

}
