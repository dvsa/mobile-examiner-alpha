import { NgModule } from '@angular/core';
import { AllOnOneFormElementComponent } from './all-on-one-form-element/all-on-one-form-element';
import { AllOnOneFormSubElementComponent } from './all-on-one-form-sub-element/all-on-one-form-sub-element';
import { SidebarGridComponent } from './sidebar-grid/sidebar-grid';
import { FaultControlsV2Component } from './fault-controls-v2/fault-controls-v2';
@NgModule({
	declarations: [
		AllOnOneFormElementComponent,
		AllOnOneFormSubElementComponent,
    SidebarGridComponent,
    FaultControlsV2Component
	],
	imports: [],
	exports: [
		AllOnOneFormElementComponent,
		AllOnOneFormSubElementComponent,
    SidebarGridComponent,
    FaultControlsV2Component
	]
})
export class ComponentsModule {}
