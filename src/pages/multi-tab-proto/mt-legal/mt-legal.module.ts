import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiTabLegalPage } from './mt-legal';

@NgModule({
  declarations: [
    MultiTabLegalPage,
  ],
  imports: [
    IonicPageModule.forChild(MultiTabLegalPage),
  ],
})
export class MultiTabLegalPageModule {}
