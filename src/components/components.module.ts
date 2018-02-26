import { NgModule } from '@angular/core';
import { AllOnOneFormElementComponent } from './all-on-one-form-element/all-on-one-form-element';
import { AllOnOneFormSubElementComponent } from './all-on-one-form-sub-element/all-on-one-form-sub-element';
@NgModule({
	declarations: [
		AllOnOneFormElementComponent,
		AllOnOneFormSubElementComponent
	],
	imports: [],
	exports: [
		AllOnOneFormElementComponent,
		AllOnOneFormSubElementComponent
	]
})
export class ComponentsModule {}
