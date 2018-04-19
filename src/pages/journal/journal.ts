import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InitiateSwapPage } from '../initiate-swap/initiate-swap';
import { CandidateInfoPage } from '../candidate-info/candidate-info';
import { Page } from 'ionic-angular/navigation/nav-util';
import { JournalProvider } from '../../providers/journal/journal';
import { IJournal } from '../../providers/journal/journal-model';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';

@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html'
})
export class JournalPage {
  journalSlots: IJournal[];
  candidateInfoPage: Page = CandidateInfoPage;
  initiateSwapPage: Page = InitiateSwapPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private journalProvider: JournalProvider,
    private faultsService: FaultsScorecardProvider,
    private faultStore: FaultStoreProvider
  ) {}

  ionViewDidLoad() {
    this.journalProvider.getData('test@test.com').subscribe((data) => {
      this.journalSlots = data;
    });

    this.faultsService.reset();
    this.faultStore.reset();
  }

  hasFailed(slot) {
    return slot.details && !slot.details.success;
  }

  hasPassed(slot) {
    return slot.details && slot.details.success;
  }

  requiresCheck(slot) {
    return slot.checkMarker;
  }
}
