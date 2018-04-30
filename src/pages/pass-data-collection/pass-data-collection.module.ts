import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassDataCollectionPage } from './pass-data-collection';

@NgModule({
  declarations: [
    PassDataCollectionPage,
  ],
  imports: [
    IonicPageModule.forChild(PassDataCollectionPage),
  ],
})
export class PassDataCollectionPageModule {}
