import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'tell-me-modal',
  templateUrl: 'tell-me-modal.html'
})
export class TellMeModalComponent {
  selectedTellMeQuestionId: string;

  tellMeQuestions = [
    {
      id: 'T1',
      question:
        'Tell me how you would check that the brakes are working before starting a journey.',
      keyWords: 'Brakes',
      today: 2,
      last7days: 8,
      isExpanded: false
    },
    {
      id: 'T2',
      question:
        'Tell me where you would find the information for the recommended tyre pressures for this car and how tyre pressures should be checked.',
      keyWords: 'Tyre pressures',
      today: 2,
      last7days: 5,
      isExpanded: false
    },
    {
      id: 'T3',
      question:
        'Tell me how you make sure your head restraint is correctly adjusted so it provides the best protection in the event of a crash.',
      keyWords: 'Head restraint',
      today: 1,
      last7days: 6,
      isExpanded: false
    },
    {
      id: 'T4',
      question:
        'Tell me how you would check the tyres to ensure that they have sufficient tread depth and that their general condition is safe to use on the road.',
      keyWords: 'Sufficient tread',
      today: 2,
      last7days: 3,
      isExpanded: false
    },
    {
      id: 'T5',
      question:
        'Tell me how you would check that the headlights & tail lights are working. (No need to exit vehicle)',
      keyWords: 'Headlights & tail lights',
      today: 0,
      last7days: 1,
      isExpanded: false
    },
    {
      id: 'T6',
      question:
        'Tell me how you would know if there was a problem with your antilock braking system.',
      keyWords: 'Antilock braking system',
      today: 0,
      last7days: 1,
      isExpanded: false
    },
    {
      id: 'T7',
      question:
        'Tell me how you would check the direction indicators are working. (No need to exit the vehicle)',
      keyWords: 'Direction indicators',
      today: 0,
      last7days: 0,
      isExpanded: false
    },
    {
      id: 'T8',
      question: 'Tell me how you would check the brake lights are working on this car.',
      keyWords: 'Brake lights',
      today: 0,
      last7days: 0,
      isExpanded: false
    },
    {
      id: 'T9',
      question:
        'Tell me how you would check the power assisted steering is working before starting a journey.',
      keyWords: 'Power assisted steering',
      today: 0,
      last7days: 0,
      isExpanded: false
    },
    {
      id: 'T10',
      question:
        'Tell me how you would switch on the rear fog light(s) and explain when you would use it/them, (no need to exit vehicle).',
      keyWords: 'Rear fog light(s)',
      today: 0,
      last7days: 0,
      isExpanded: false
    },
    {
      id: 'T11',
      question:
        'Tell me how you switch your headlight from dipped to main beam and explain how you would know the main beam is on.',
      keyWords: 'Dipped to main beam',
      today: 0,
      last7days: 0,
      isExpanded: false
    },
    {
      id: 'T12',
      question:
        'Open the bonnet and tell me how you would check that the engine has sufficient oil.',
      keyWords: 'Engine has sufficient oil',
      today: 0,
      last7days: 0,
      isExpanded: false
    },
    {
      id: 'T13',
      question:
        'Open the bonnet and tell me how you would check that the engine has sufficient engine coolant.',
      keyWords: 'Engine coolant',
      today: 0,
      last7days: 0,
      isExpanded: false
    },
    {
      id: 'T14',
      question:
        'Open the bonnet and tell me how you would check that you have a safe level of hydraulic brake fluid.',
      keyWords: 'Brake fluid',
      today: 0,
      last7days: 0,
      isExpanded: false
    }
  ];

  constructor(private viewCtrl: ViewController, params: NavParams) {
    this.selectedTellMeQuestionId = params.get('selectedTellMeQuestionId');
  }

  dismiss() {
    this.viewCtrl.dismiss(null, 'dismiss');
  }

  select({ id, keyWords } = { id: '', keyWords: '' }) {
    this.selectedTellMeQuestionId = id;
    setTimeout(() => this.viewCtrl.dismiss({ id, keyWords }), 300);
  }

  toggle(index: number) {
    this.tellMeQuestions[index].isExpanded = !this.tellMeQuestions[index].isExpanded;
  }
}
