import { Component, Input } from '@angular/core';

/**
 * Generated class for the Dl25ModalRowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dl25-modal-row',
  templateUrl: 'dl25-modal-row.html'
})
export class Dl25ModalRowComponent {

  @Input() hasSections: boolean;
  @Input() section: string;
  @Input() faultTitle: string;

  constructor() {
  }

}
