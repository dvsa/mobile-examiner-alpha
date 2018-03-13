import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select, NgRedux } from '@angular-redux/store';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';
import { IFaultState, IFaultElementState } from '../../providers/fault-store/fault-store.model';

interface IFaultCounter {
  faults: IFaultElementState,
  totals: IFaultState
}

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

  constructor(private faultStore: FaultStoreProvider,
    private ngRedux: NgRedux<IFaultCounter>) {

  }

  undoMark() {
    const currentState = this.ngRedux.getState();
    this.faultStore.undoFault(currentState.faults.lastFault);
  }

}
