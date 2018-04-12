import { Component, Input } from '@angular/core';

@Component({
  selector: 'select-button',
  templateUrl: 'select-button.html'
})
export class SelectButtonComponent {
  @Input() selectedText: string;
  @Input() onClick: () => void;

  constructor() {}
}
