import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';

import { IFaultSummary } from '../../components/test-summary/interfaces/IFaultSummary';
import { FaultTitle } from '../../components/test-summary/enums/FaultTitle';
import { WeatherSelectorComponent } from '../../components/weather-selector/weather-selector';
import { JournalPage } from '../journal/journal';

@IonicPage()
@Component({
  selector: 'page-post-test-summary',
  templateUrl: 'post-test-summary.html'
})
export class PostTestSummaryPage {
  
  drivingFaultSummary: IFaultSummary;
  seriousFaultSummary: IFaultSummary;
  dangerousFaultSummary: IFaultSummary;
  journalPage: Page = JournalPage;

  conditionsList: string;

  faultTitleColourMap = [
    { title: FaultTitle.Dangerous, colour: 'failRed' },
    { title: FaultTitle.Serious, colour: 'seriousYellow' },
    { title: FaultTitle.DriverFaults, colour: 'dark' }
  ];

  constructor(private modalCtrl: ModalController, private navCtrl: NavController, private faultStore: FaultStoreProvider) {
    this.faultStore.getFaultTotals().subscribe((faultSummaries) => {
      this.drivingFaultSummary = faultSummaries.drivingFaultSummary;
      this.seriousFaultSummary = faultSummaries.seriousFaultSummary;
      this.dangerousFaultSummary = faultSummaries.dangerousFaultSummary;
    })
  }

  backToJournal() {
    this.navCtrl.popToRoot();
  }

  openWeatherModal() {
    const modal = this.modalCtrl.create(WeatherSelectorComponent);
    modal.onDidDismiss((data) => {
      if (data) {
        this.conditionsList = data;
      }
    });
    modal.present();
  }
}
