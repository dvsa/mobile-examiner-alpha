import { Component, Input } from '@angular/core';

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
    undo: true
  }

  constructor() {
    if (typeof this.options === 'undefined' || this.options === null) {
      this.options = this.defaultOptions;
    }
  }

}
