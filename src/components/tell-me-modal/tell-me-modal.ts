import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'tell-me-modal',
  templateUrl: 'tell-me-modal.html'
})
export class TellMeModalComponent {
  selectedTellMeQuestionId: string;

  tellMeQuestions = [
    { id: 'T1', today: 2, last7days: 8 },
    { id: 'T2', today: 2, last7days: 5 },
    { id: 'T3', today: 1, last7days: 6 },
    { id: 'T4', today: 2, last7days: 3 },
    { id: 'T5', today: 0, last7days: 1 },
    { id: 'T6', today: 0, last7days: 1 },
    { id: 'T7', today: 0, last7days: 0 },
    { id: 'T8', today: 0, last7days: 0 },
    { id: 'T9', today: 0, last7days: 0 },
    { id: 'T10', today: 0, last7days: 0 },
    { id: 'T11', today: 0, last7days: 0 },
    { id: 'T12', today: 0, last7days: 0 },
    { id: 'T13', today: 0, last7days: 0 },
    { id: 'T14', today: 0, last7days: 0 }
  ];

  constructor(private viewCtrl: ViewController, params: NavParams) {
    this.selectedTellMeQuestionId = params.get('selectedTellMeQuestionId');
  }

  dismiss() {
    this.viewCtrl.dismiss(null, 'dismiss');
  }

  select(itemId: string) {
    this.viewCtrl.dismiss(itemId);
  }
}
