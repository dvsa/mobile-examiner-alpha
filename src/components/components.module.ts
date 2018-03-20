import { NgModule } from '@angular/core';
import { AllOnOneFormElementComponent } from './all-on-one-form-element/all-on-one-form-element';
import { AllOnOneFormFaultModesSubElementComponent } from './all-on-one-form-fault-modes-sub-element/all-on-one-form-fault-modes-sub-element';
import { TotalsComponent } from './totals/totals';
import { ButtonElementComponent } from './button-element/button-element';
@NgModule({
	declarations: [
		AllOnOneFormElementComponent,
		AllOnOneFormFaultModesSubElementComponent,
		TotalsComponent,
		ButtonElementComponent
	],
	imports: [],
	exports: [
		AllOnOneFormElementComponent,
		AllOnOneFormFaultModesSubElementComponent,
		TotalsComponent,
		ButtonElementComponent
	]
})
export class ComponentsModule { }
