import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManoeuvrePage } from './manoeuvre';

@NgModule({
  declarations: [
    ManoeuvrePage,
  ],
  imports: [
    IonicPageModule.forChild(ManoeuvrePage),
  ],
})
export class ManoeuvrePageModule {}
