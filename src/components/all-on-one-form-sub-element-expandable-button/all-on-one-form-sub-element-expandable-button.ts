import { Component, Input } from '@angular/core';

@Component({
  selector: 'all-on-one-form-sub-element-expandable-button',
  templateUrl: 'all-on-one-form-sub-element-expandable-button.html'
})
export class AllOnOneFormSubElementButtonExpandableComponent {
  @Input() isEnabled: boolean = false;
  @Input() text: string;
  @Input() items: string[];

  constructor() {}

  toggle() {
    this.isEnabled = !this.isEnabled;
  }

  close() {
    this.isEnabled = false;
  }
}
