import { NgModule } from '@angular/core';
import { PageHeaderComponent } from './page-header/page-header';
import { IonicModule } from 'ionic-angular';
import { JournalHeaderComponent } from './journal-header/journal-header';
import { TestSummaryComponent } from './test-summary/test-summary';
import { ButtonCardComponent } from './button-card/button-card';
import { HeaderComponent } from './header/header';
import { TestSummarySectionComponent } from './test-summary/test-summary-section/test-summary-section';

@NgModule({
  declarations: [
    PageHeaderComponent,
    JournalHeaderComponent,
    HeaderComponent,
    TestSummaryComponent,
    ButtonCardComponent,
    TestSummarySectionComponent
  ],
  imports: [
    IonicModule.forRoot(PageHeaderComponent)
  ],
  exports: [
    PageHeaderComponent,
    JournalHeaderComponent,
    HeaderComponent,
    TestSummaryComponent,
    ButtonCardComponent,
    TestSummarySectionComponent
  ]
})
export class ComponentsModule {}
