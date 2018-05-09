import { Component } from '@angular/core';
import { ModalController, NavController, AlertController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';

import { IFaultSummary } from '../../components/test-summary/interfaces/IFaultSummary';
import { FaultTitle } from '../../components/test-summary/enums/FaultTitle';
import { WeatherSelectorComponent } from '../../components/weather-selector/weather-selector';
import { JournalPage } from '../journal/journal';

@Component({
  selector: 'page-post-test-summary',
  templateUrl: 'post-test-summary.html'
})
export class PostTestSummaryPage {
  drivingFaultSummary: IFaultSummary;
  seriousFaultSummary: IFaultSummary;
  dangerousFaultSummary: IFaultSummary;
  journalPage: Page = JournalPage;
  selectedRoute: number = null;

  conditionsList: string;

  faultTitleColourMap = [
    { title: FaultTitle.Dangerous, colour: 'failRed' },
    { title: FaultTitle.Serious, colour: 'seriousYellow' },
    { title: FaultTitle.DrivingFaults, colour: 'dark' }
  ];

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private faultStore: FaultStoreProvider,
    private alertCtrl: AlertController
  ) {
    this.faultStore.getFaultTotals().subscribe((faultSummaries) => {
      this.drivingFaultSummary = faultSummaries.drivingFaultSummary;
      this.seriousFaultSummary = faultSummaries.seriousFaultSummary;
      this.dangerousFaultSummary = faultSummaries.dangerousFaultSummary;
    });
  }

  backToJournal() {
    this.faultStore.reset();
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

  showRouteListAlert() {
    const inputs = [];
    for (let i = 1; i <= 13; i += 1) {
      inputs.push({
        type: 'radio',
        label: i,
        value: i,
        checked: this.selectedRoute === i
      });
    }

    const prompt = this.alertCtrl.create({
      inputs,
      title: 'Choose route number',
      buttons: [
        {
          text: 'Ok',
          handler: (chosenRoute) => {
            this.selectedRoute = chosenRoute;
          }
        }
      ]
    });
    prompt.present();
  }
}
