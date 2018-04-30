import { Component, Input } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';

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
  @Input() summary: IFaultSummary;
  journalPage: Page = JournalPage;

  conditionsList: string;

  faultTitleColourMap = [
    { title: FaultTitle.Dangerous, colour: 'failRed' },
    { title: FaultTitle.Serious, colour: 'seriousYellow' },
    { title: FaultTitle.DriverFaults, colour: 'dark' }
  ];

  faultSummaries: IFaultSummary[] = [
    {
      title: FaultTitle.Dangerous,
      total: 2,
      faults: [
        { name: 'Positioning - Lane Discipline', total: 1 },
        { name: 'Response to signs - Other Road Users', total: 1 }
      ]
    },
    {
      title: FaultTitle.Serious,
      total: 3,
      faults: [
        { name: 'Judgement - Cutting Corners', total: 1 },
        { name: 'Awareness / Planning', total: 1 },
        { name: 'Overtaking', total: 1 }
      ]
    },
    {
      title: FaultTitle.DriverFaults,
      total: 8,
      faults: [
        { name: 'Judgement - Cutting Corners', total: 2 },
        { name: 'Awareness / Planning', total: 1 },
        { name: 'Overtaking', total: 1 },
        { name: 'Positioning - Lane Discipline', total: 3 },
        { name: 'Response to signs - Other Road Users', total: 1 }
      ]
    }
  ];

  constructor(private modalCtrl: ModalController, private navCtrl: NavController) {}

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
