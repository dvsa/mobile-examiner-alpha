import { AlphaHeaderComponent } from './alpha-header/alpha-header';
import { AllOnOneFormSubElementHoldNoModalComponent } from './all-on-one-form-sub-element-hold-no-modal/all-on-one-form-sub-element-hold-no-modal';
import { TotalsComponent } from './totals/totals';
import { ReportHeaderV2Component } from './report-header-v2/report-header-v2';
import { AllOnOneFormSubElementButtonComponent } from './all-on-one-form-sub-element-button/all-on-one-form-sub-element-button';
import { NgModule } from '@angular/core';
import { PageHeaderComponent } from './page-header/page-header';
import { IonicModule } from 'ionic-angular';
import { JournalHeaderComponent } from './journal-header/journal-header';
import { TestSummaryComponent } from './test-summary/test-summary';
import { ButtonCardComponent } from './button-card/button-card';
import { TestSummarySectionComponent } from './test-summary/test-summary-section/test-summary-section';
import { TellMeModalComponent } from './tell-me-modal/tell-me-modal';
import { SelectButtonComponent } from './select-button/select-button';
import { WeatherSelectorComponent } from './weather-selector/weather-selector';
import { TimerComponent } from './timer/timer';
import { LegalRequirementsComponent } from './legal-requirements/legal-requirements';
import { HeaderComponent } from './mes-header/mes-header';
import { PostTestSummarySectionComponent } from './post-test-summary-section/post-test-summary-section';
import { TextboxModalComponent } from './textbox-modal/textbox-modal';

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
    WeatherSelectorComponent,
    AllOnOneFormSubElementButtonComponent,
    ReportHeaderV2Component,
    TimerComponent,
    TotalsComponent,
    AllOnOneFormSubElementHoldNoModalComponent,
    LegalRequirementsComponent,
    AlphaHeaderComponent,
    PostTestSummarySectionComponent,
    TextboxModalComponent
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
    WeatherSelectorComponent,
    AllOnOneFormSubElementButtonComponent,
    ReportHeaderV2Component,
    TimerComponent,
    TotalsComponent,
    AllOnOneFormSubElementHoldNoModalComponent,
    LegalRequirementsComponent,
    AlphaHeaderComponent,
    PostTestSummarySectionComponent,
    TextboxModalComponent
  ]
})
export class ComponentsModule {}
