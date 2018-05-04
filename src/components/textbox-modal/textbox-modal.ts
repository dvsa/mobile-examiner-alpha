import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'textbox-modal',
  templateUrl: 'textbox-modal.html'
})
export class TextboxModalComponent {
  title: string;

  constructor(private viewCtrl: ViewController, public params: NavParams) {
    this.title = params.get('title');
  }

  dismiss() {
    this.viewCtrl.dismiss(null, 'dismiss');
  }
}
