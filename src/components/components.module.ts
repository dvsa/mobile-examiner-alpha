import { NgModule } from '@angular/core';
import { PageHeaderComponent } from './page-header/page-header';
import { IonicModule } from 'ionic-angular';
import { JournalHeaderComponent } from './journal-header/journal-header';
@NgModule({
  declarations: [PageHeaderComponent, JournalHeaderComponent],
  imports: [IonicModule.forRoot(PageHeaderComponent)],
  exports: [PageHeaderComponent, JournalHeaderComponent]
})
export class ComponentsModule {}
