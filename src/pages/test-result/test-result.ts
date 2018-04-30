import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { PostTestSummaryPage } from '../post-test-summary/post-test-summary';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';
import { IFaultSummary } from '../../components/test-summary/interfaces/IFaultSummary';
import { FaultTitle } from '../../components/test-summary/enums/FaultTitle';
import { TestResult } from '../../components/test-summary/enums/TestResult';
import { PassDataCollectionPage } from '../pass-data-collection/pass-data-collection';

@Component({
  selector: 'page-test-result',
  templateUrl: 'test-result.html'
})
export class TestResultPage {
  postTestSummaryPage: Page = PostTestSummaryPage;
  passDataCollectionPage: Page = PassDataCollectionPage;
  testResult: string;
  faultSummaries: {
    [key: string]: IFaultSummary;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private faultStore: FaultStoreProvider) {
    this.faultStore.calculateFaultTotals();
    this.testResult = this.faultStore.getTestResult();
    const drivingFaultSummary = {
      title: FaultTitle.Dangerous,
      total: this.faultStore.getNumberOfDangerousFaults(),
      faults: this.faultStore.getDangerousFaults()
    }
    const seriousFaultSummary = {
      title: FaultTitle.Serious,
      total: this.faultStore.getNumberOfSeriousFaults(),
      faults: this.faultStore.getSeriousFaults()
    }
    const dangerousFaultSummary = {
      title: FaultTitle.DriverFaults,
      total: this.faultStore.getNumberOfDrivingFaults(),
      faults: this.faultStore.getDrivingFaults()
    }
    this.faultSummaries = {
      drivingFaultSummary,
      seriousFaultSummary,
      dangerousFaultSummary
    }
  }

  getNextPage(): Page {
    return this.testResult === TestResult.Fail ? this.postTestSummaryPage : this.passDataCollectionPage;
  }

  goBack() {
    this.navCtrl.pop({ animate: false });
  }
}
