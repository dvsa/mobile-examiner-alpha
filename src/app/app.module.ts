import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Config } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HeaderComponent } from '../components/header/header';
import { ComponentLibraryPage } from '../pages/component-library/component-library';
import { BackLinkComponent } from '../components/back-link/back-link';
import { ReportHeaderComponent } from '../components/report-header/report-header';
import { AllOnOnePage } from '../pages/all-on-one/all-on-one';
import { AllOnOnePage3 } from '../pages/all-on-one-3/all-on-one-3';
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
import { NotesPage } from '../pages/notes/notes';

import { AllOnOneFormElementComponent } from '../components/all-on-one-form-element/all-on-one-form-element';
import { AllOnOneFormSubElementComponent } from '../components/all-on-one-form-sub-element/all-on-one-form-sub-element';
import { AllOnOneFormSubElementHoldComponent } from '../components/all-on-one-form-sub-element-hold/all-on-one-form-sub-element-hold';
import { SidebarGridComponent } from '../components/sidebar-grid/sidebar-grid';
import { FaultControlsV2Component } from '../components/fault-controls-v2/fault-controls-v2';
import { PressedFaultModalComponent } from '../components/pressed-fault-modal/pressed-fault-modal';
import { SidebarFaultDataProvider } from '../providers/sidebar-fault-data/sidebar-fault-data';
import { ButtonsModalsPressedFaultModalComponent } from '../components/buttons-modals-pressed-fault-modal/buttons-modals-pressed-fault-modal';
import { PressedFaultModalComponentAOOP } from './../components/pressed-fault-modal-aoop/pressed-fault-modal-aoop';
import { ModalEnterTransition } from '../transitions/modal-enter.transition';
import { ModalLeaveTransition } from '../transitions/modal-leave.transition';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TablePage,
    FailCounter,
    LegalPage,
    NotesPage,
    ComponentLibraryPage,
    HeaderComponent,
    BackLinkComponent,
    ReportHeaderComponent,
    AllOnOnePage,
    AllOnOnePage3,
    TimerComponent,
    AllOnOneFormElementComponent,
    AllOnOneFormSubElementComponent,
    AllOnOneFormSubElementHoldComponent,
    SidebarPrototypePage,
    FaultsScorecardComponent,
    FaultControlsComponent,
    Dl25ButtonsModalsPage,
    Dl25ModalComponent,
    Dl25ModalRowComponent,
    SidebarGridComponent,
    FaultControlsV2Component,
    PressedFaultModalComponent,
    ButtonsModalsPressedFaultModalComponent,
    PressedFaultModalComponentAOOP,
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
    TablePage,
    FailCounter,
    AllOnOnePage,
    AllOnOnePage3,
    LegalPage,
    SidebarPrototypePage,
    SidebarGridComponent,
    NotesPage,
    FaultControlsV2Component,
    PressedFaultModalComponent,
    ButtonsModalsPressedFaultModalComponent,
    PressedFaultModalComponentAOOP,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FaultsScorecardProvider,
    FaultDataProvider,
    SidebarFaultDataProvider
  ]
})
export class AppModule { 
  constructor(private config: Config) {
    this.setCustomTransitions();
  }

  private setCustomTransitions() {
    this.config.setTransition('modal-leave', ModalLeaveTransition);
    this.config.setTransition('modal-enter', ModalEnterTransition);
}
}
