import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwoColPage } from './two-col';

@NgModule({
  declarations: [
    TwoColPage,
  ],
  imports: [
    IonicPageModule.forChild(TwoColPage),
  ],
})
export class TwoColPageModule {}
