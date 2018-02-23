import { Component } from '@angular/core';

/**
 * Generated class for the TimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})
export class TimerComponent {

  time: number;
  date: Date = new Date(null);
  dateTime: string;

  constructor() {
    this.time = 0;
    this.date.setSeconds(this.time);
    this.dateTime = '';
  }

  ngOnInit() {
    setInterval(() => {
      this.date = new Date(null);
      this.date.setSeconds(this.time++);
      const showExtraZeroMins = this.date.getMinutes() < 10;
      const showExtraZeroSecs = this.date.getSeconds() < 10;
      this.dateTime = `${showExtraZeroMins ? '0' : ''}${this.date.getMinutes()}:${showExtraZeroSecs ? '0' : ''}${this.date.getSeconds()}`;
    }, 1000);
  }

}
