import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ManoeuvrePage } from '../pages/multi-tab-proto/manoeuvre/manoeuvre';
import { CompetencyPage } from '../pages/multi-tab-proto/competency/competency';
import { MultiTabLegalPage } from '../pages/multi-tab-proto/mt-legal/mt-legal';
import { TabsPage } from '../pages/multi-tab-proto/tabs/tabs';

import { HeaderComponent } from '../components/header/header';
import { ComponentLibraryPage } from '../pages/component-library/component-library';
import { BackLinkComponent } from '../components/back-link/back-link';
import { ReportHeaderComponent } from '../components/report-header/report-header';
import { AllOnOnePage } from '../pages/all-on-one/all-on-one';
import { TimerComponent } from '../components/timer/timer';

import { SidebarPrototypePage } from '../pages/sidebar-prototype/sidebar-prototype';
import { TablePage } from '../components/table/table';
import { FailCounter } from '../components/fail-counter/fail-counter';
import { LegalPage } from '../pages/legal/legal';
import { FaultsScorecardComponent } from '../components/faults-scorecard/faults-scorecard';
import { FaultsScorecardProvider } from '../providers/faults-scorecard/faults-scorecard';
import { FaultControlsComponent } from '../components/fault-controls/fault-controls';
import { FaultControlsMultiTabComponent } from '../components/fault-controls-multiTab/fault-controls-multiTab';
import { NotesPage } from '../pages/notes/notes';

import { AllOnOneFormElementComponent } from '../components/all-on-one-form-element/all-on-one-form-element';
import { AllOnOneFormSubElementComponent } from '../components/all-on-one-form-sub-element/all-on-one-form-sub-element';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ManoeuvrePage,
    CompetencyPage,
    MultiTabLegalPage,
    TablePage,
    FailCounter,
    LegalPage,
    NotesPage,
    ComponentLibraryPage,
    HeaderComponent,
    BackLinkComponent,
    ReportHeaderComponent,
    AllOnOnePage,
    TimerComponent,
    AllOnOneFormElementComponent,
    AllOnOneFormSubElementComponent,
    SidebarPrototypePage,
    FaultsScorecardComponent,
    FaultControlsComponent,
    FaultControlsMultiTabComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ManoeuvrePage,
    CompetencyPage,
    MultiTabLegalPage,
    ComponentLibraryPage,
    TablePage,
    FailCounter,
    AllOnOnePage,
    LegalPage,
    ComponentLibraryPage,
    SidebarPrototypePage,
    NotesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FaultsScorecardProvider
  ]
})
export class AppModule { }
