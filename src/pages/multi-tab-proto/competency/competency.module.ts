import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetencyPage } from './competency';

@NgModule({
  declarations: [
    CompetencyPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetencyPage),
  ],
})
export class CompetencyPageModule {}
