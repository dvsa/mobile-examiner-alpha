import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllOnOnePageFaultModes } from './all-on-one-fault-modes';

@NgModule({
  declarations: [
    AllOnOnePageFaultModes,
  ],
  imports: [
    IonicPageModule.forChild(AllOnOnePageFaultModes),
  ],
})
export class AllOnOnePageModule {}
