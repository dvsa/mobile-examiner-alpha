import { NgModule } from '@angular/core';
import { AllOnOneFormElementComponent } from './all-on-one-form-element/all-on-one-form-element';
import { AllOnOneFormSubElementComponent } from './all-on-one-form-sub-element/all-on-one-form-sub-element';
import { SidebarGridComponent } from './sidebar-grid/sidebar-grid';
@NgModule({
	declarations: [
		AllOnOneFormElementComponent,
		AllOnOneFormSubElementComponent,
    SidebarGridComponent
	],
	imports: [],
	exports: [
		AllOnOneFormElementComponent,
		AllOnOneFormSubElementComponent,
    SidebarGridComponent
	]
})
export class ComponentsModule {}
