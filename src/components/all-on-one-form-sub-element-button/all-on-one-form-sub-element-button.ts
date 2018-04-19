import { Component, Input } from '@angular/core';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';

@Component({
  selector: 'all-on-one-form-sub-element-button',
  templateUrl: 'all-on-one-form-sub-element-button.html'
})
export class AllOnOneFormSubElementButtonComponent {
  @Input() isEnabled: boolean = false;
  @Input() text: string;
  @Input() sectionsToShow: string;
  serious: boolean = false;
  dangerous: boolean = false;

  constructor(private faultStore: FaultStoreProvider) {}

  ngOnChanges() {
    const controlKey = 'manoeuver' + this.sectionsToShow + 'Controlv1';
    const obsKey = 'manoeuver' + this.sectionsToShow + 'Observationv1';

    this.faultStore.currentfaults$.subscribe((data) => {
      if (data[obsKey]) {
        if (data[obsKey].serious) {
          this.serious = !!data[obsKey].serious;
        }
        if (data[obsKey].dangerous) {
          this.dangerous = !!data[obsKey].dangerous;
        }
      }

      if (data[controlKey]) {
        if (data[controlKey].serious) {
          this.serious = !!data[controlKey].serious;
        }

        if (data[controlKey].dangerous) {
          this.dangerous = !!data[controlKey].dangerous;
        }
      }

      if (!data[controlKey] && !data[obsKey]) {
        this.serious = false;
        this.dangerous = false;
      }
    });
  }

  toggle() {
    this.isEnabled = !this.isEnabled;
  }
}
