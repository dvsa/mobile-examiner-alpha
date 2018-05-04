import { Component, Input } from '@angular/core';
import { IFaultSummary } from '../test-summary/interfaces/IFaultSummary';
import { FaultTitle } from '../test-summary/enums/FaultTitle';
import { find } from 'lodash';
import { ModalController } from 'ionic-angular';
import { TextboxModalComponent } from '../textbox-modal/textbox-modal';

@Component({
  selector: 'post-test-summary-section',
  templateUrl: 'post-test-summary-section.html'
})
export class PostTestSummarySectionComponent {
  @Input() summary: IFaultSummary;

  faultTitleColourMap = [
    { title: FaultTitle.Dangerous, colour: 'failRed' },
    { title: FaultTitle.Serious, colour: 'seriousYellow' },
    { title: FaultTitle.DriverFaults, colour: 'dark' }
  ];

  constructor(private modalCtrl: ModalController) {}

  getFaultTitleColour(title: FaultTitle) {
    return find(this.faultTitleColourMap, { title }).colour;
  }

  openTextboxModal(faultName: string) {
    this.modalCtrl.create(TextboxModalComponent, { title: faultName }).present();
  }
}
