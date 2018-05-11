import { Component, Input } from '@angular/core';
import { TestResultPage } from '../../pages/test-result/test-result';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the ReportHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'report-header-v2',
  templateUrl: 'report-header-v2.html'
})
export class ReportHeaderV2Component {
  @Input() options;

  defaultOptions: any = {
    undo: true,
    nextPage: TestResultPage
  };

  constructor(private navCtrl: NavController) {
    if (typeof this.options === 'undefined' || this.options === null) {
      this.options = this.defaultOptions;
    }
  }

  goToTestResultPage() {
    this.navCtrl.push(this.options.nextPage);
  }
}
