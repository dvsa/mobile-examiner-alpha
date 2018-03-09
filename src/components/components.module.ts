import { NgModule } from '@angular/core';
import { AllOnOneFormElementComponent } from './all-on-one-form-element/all-on-one-form-element';
import { AllOnOneFormFaultModesSubElementComponent } from './all-on-one-form-fault-modes-sub-element/all-on-one-form-fault-modes-sub-element';
import { SidebarGridComponent } from './sidebar-grid/sidebar-grid';
import { FaultControlsV2Component } from './fault-controls-v2/fault-controls-v2';
import { PressedFaultModalComponent } from './pressed-fault-modal/pressed-fault-modal';
@NgModule({
	declarations: [
		AllOnOneFormElementComponent,
		AllOnOneFormFaultModesSubElementComponent,
    SidebarGridComponent,
    FaultControlsV2Component,
    PressedFaultModalComponent
	],
	imports: [],
	exports: [
		AllOnOneFormElementComponent,
		AllOnOneFormFaultModesSubElementComponent,
    SidebarGridComponent,
    FaultControlsV2Component,
    PressedFaultModalComponent
	]
})
export class ComponentsModule {}
