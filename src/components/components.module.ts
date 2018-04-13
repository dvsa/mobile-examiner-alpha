import { NgModule } from '@angular/core';
import { PageHeaderComponent } from './page-header/page-header';
import { IonicModule } from 'ionic-angular';
import { JournalHeaderComponent } from './journal-header/journal-header';
import { TestSummaryComponent } from './test-summary/test-summary';
import { ButtonCardComponent } from './button-card/button-card';
import { HeaderComponent } from './header/header';
import { TestSummarySectionComponent } from './test-summary/test-summary-section/test-summary-section';
import { TellMeModalComponent } from './tell-me-modal/tell-me-modal';
import { SelectButtonComponent } from './select-button/select-button';
import { WeatherSelectorComponent } from './weather-selector/weather-selector';

@NgModule({
  declarations: [
    PageHeaderComponent,
    JournalHeaderComponent,
    HeaderComponent,
    TestSummaryComponent,
    ButtonCardComponent,
    TestSummarySectionComponent,
    TellMeModalComponent,
    SelectButtonComponent,
    WeatherSelectorComponent
  ],
  imports: [IonicModule.forRoot(PageHeaderComponent)],
  exports: [
    PageHeaderComponent,
    JournalHeaderComponent,
    HeaderComponent,
    TestSummaryComponent,
    ButtonCardComponent,
    TestSummarySectionComponent,
    TellMeModalComponent,
    SelectButtonComponent,
    WeatherSelectorComponent
  ]
})
export class ComponentsModule {}
