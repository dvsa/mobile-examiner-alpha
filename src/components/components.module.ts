import { NgModule } from '@angular/core';
import { AllOnOneFormElementComponent } from './all-on-one-form-element/all-on-one-form-element';
import { AllOnOneFormFaultModesSubElementComponent } from './all-on-one-form-fault-modes-sub-element/all-on-one-form-fault-modes-sub-element';
import { SidebarGridComponent } from './sidebar-grid/sidebar-grid';
import { FaultControlsV2Component } from './fault-controls-v2/fault-controls-v2';
import { PressedFaultModalComponent } from './pressed-fault-modal/pressed-fault-modal';
import { TotalsComponent } from './totals/totals';
import { ButtonElementComponent } from './button-element/button-element';
import { AllOnOneFormSubElementComponent } from './all-on-one-form-sub-element/all-on-one-form-sub-element';
@NgModule({
	declarations: [
		AllOnOneFormElementComponent,
		AllOnOneFormFaultModesSubElementComponent,
		SidebarGridComponent,
		FaultControlsV2Component,
		PressedFaultModalComponent,
		AllOnOneFormSubElementComponent,
		SidebarGridComponent,
		FaultControlsV2Component,
		PressedFaultModalComponent,
		TotalsComponent,
		ButtonElementComponent
	],
	imports: [],
	exports: [
		AllOnOneFormElementComponent,
		AllOnOneFormFaultModesSubElementComponent,
		SidebarGridComponent,
		FaultControlsV2Component,
		PressedFaultModalComponent,
		AllOnOneFormSubElementComponent,
    	SidebarGridComponent,
    	FaultControlsV2Component,
		PressedFaultModalComponent,
		TotalsComponent,
		ButtonElementComponent
	]
})
export class ComponentsModule { }
