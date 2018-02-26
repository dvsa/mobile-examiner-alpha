import { Component, Input } from '@angular/core';

@Component({
  selector: 'all-on-one-form-element',
  templateUrl: 'all-on-one-form-element.html'
})
export class AllOnOneFormElementComponent {

  @Input()
  header: string;

  constructor() {
  }

}
