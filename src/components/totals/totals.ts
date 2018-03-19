import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';

/**
 * Generated class for the TotalsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'totals',
  templateUrl: 'totals.html'
})
export class TotalsComponent {

  @select(['totals', 'fault']) readonly faultMarks$: Observable<number>;
  @select(['totals', 'dangerous']) readonly dangerousMarks$: Observable<number>;
  @select(['totals', 'serious']) readonly seriousMarks$: Observable<number>;

  constructor(private faultStore: FaultStoreProvider) {
  }

  undoMark() {
    this.faultStore.undoFault();
  }

}
