import { Component, Input } from '@angular/core';

@Component({
  selector: 'play-pause-debrief-button',
  templateUrl: 'play-pause-debrief-button.html'
})
export class PlayPauseDebriefButtonComponent {
  @Input() buttonStatus: string;

  constructor() {}
  ionViewWillEnter() {}
  ngOnInit() {}
}
