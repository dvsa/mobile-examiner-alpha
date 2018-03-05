import { NgModule } from '@angular/core';
import { AllOnOneFormElementComponent } from './all-on-one-form-element/all-on-one-form-element';
import { AllOnOneFormSubElementComponent } from './all-on-one-form-sub-element/all-on-one-form-sub-element';
import { PressedFaultModalComponent } from './pressed-fault-modal/pressed-fault-modal';
@NgModule({
	declarations: [
		AllOnOneFormElementComponent,
		AllOnOneFormSubElementComponent,
    PressedFaultModalComponent
	],
	imports: [],
	exports: [
		AllOnOneFormElementComponent,
		AllOnOneFormSubElementComponent,
    PressedFaultModalComponent
	]
})
export class ComponentsModule {}
