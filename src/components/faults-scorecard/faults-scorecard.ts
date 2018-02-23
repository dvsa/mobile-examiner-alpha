import { Component } from '@angular/core';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the FaultsScorecardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
interface ReportState {
  drivingFaults: number,
  serious: number,
  dangerous: number
}
@Component({
  selector: 'faults-scorecard',
  templateUrl: 'faults-scorecard.html'
})
export class FaultsScorecardComponent {

  reportState: ReportState;
  _subscription: Subscription;

  constructor(faultsService: FaultsScorecardProvider) {
    this.reportState = faultsService.reportState;
    this._subscription = faultsService.change.subscribe((value) => { 
      this.reportState = value; 
    });
  }

  ngOnDestroy() {
    //prevent memory leak when component destroyed
     this._subscription.unsubscribe();
   }

}
