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
import { Dl25ButtonsModalsPage } from '../pages/dl25-buttons-modals/dl25-buttons-modals';
import { Dl25ModalComponent } from '../components/dl25-modal/dl25-modal';
import { Dl25ModalRowComponent } from '../components/dl25-modal-row/dl25-modal-row';
import { FaultDataProvider } from '../providers/fault-data/fault-data';
import { FaultControlsMultiTabComponent } from '../components/fault-controls-multiTab/fault-controls-multiTab';
import { NotesPage } from '../pages/notes/notes';

import { AllOnOneFormElementComponent } from '../components/all-on-one-form-element/all-on-one-form-element';
import { AllOnOneFormSubElementComponent } from '../components/all-on-one-form-sub-element/all-on-one-form-sub-element';
import { SidebarGridComponent } from '../components/sidebar-grid/sidebar-grid';
import { FaultControlsV2Component } from '../components/fault-controls-v2/fault-controls-v2';


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
    Dl25ButtonsModalsPage,
    Dl25ModalComponent,
    Dl25ModalRowComponent,
    FaultControlsMultiTabComponent,
    SidebarGridComponent,
    FaultControlsV2Component
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ComponentLibraryPage,
    Dl25ButtonsModalsPage,
    Dl25ModalComponent,
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
    SidebarGridComponent,
    NotesPage,
    FaultControlsV2Component
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FaultsScorecardProvider,
    FaultDataProvider
  ]
})
export class AppModule { }
