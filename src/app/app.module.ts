import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Config } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HeaderComponent } from '../components/header/header';
import { ComponentLibraryPage } from '../pages/component-library/component-library';
import { ReportHeaderComponent } from '../components/report-header/report-header';
import { AllOnOnePageFaultModes } from '../pages/all-on-one-fault-modes/all-on-one-fault-modes';
import { AllOnOnePage } from '../pages/all-on-one/all-on-one';
import { AllOnOnePage3 } from '../pages/all-on-one-3/all-on-one-3';
import { TimerComponent } from '../components/timer/timer';

import { FaultsScorecardComponent } from '../components/faults-scorecard/faults-scorecard';
import { FaultsScorecardProvider } from '../providers/faults-scorecard/faults-scorecard';
import { FaultControlsComponent } from '../components/fault-controls/fault-controls';
import { Dl25ButtonsModalsPage } from '../pages/dl25-buttons-modals/dl25-buttons-modals';
import { Dl25ModalComponent } from '../components/dl25-modal/dl25-modal';
import { Dl25ModalRowComponent } from '../components/dl25-modal-row/dl25-modal-row';
import { FaultDataProvider } from '../providers/fault-data/fault-data';

import { AllOnOneFormElementComponent } from '../components/all-on-one-form-element/all-on-one-form-element';
import { AllOnOneFormFaultModesSubElementComponent } from '../components/all-on-one-form-fault-modes-sub-element/all-on-one-form-fault-modes-sub-element';
import { AllOnOneFormSubElementHoldComponent } from '../components/all-on-one-form-sub-element-hold/all-on-one-form-sub-element-hold';
import { PressedFaultModalComponentAOOP } from './../components/pressed-fault-modal-aoop/pressed-fault-modal-aoop';
import { ButtonModalComponent } from './../components/button-modal/button-modal';
import { ModalEnterTransition } from '../transitions/modal-enter.transition';
import { ModalLeaveTransition } from '../transitions/modal-leave.transition';
import { FaultModeProvider } from '../providers/fault-mode/fault-mode';
import { AllOnOnePageFaultModalsTimerOptionsPage } from '../pages/all-on-one-page-fault-modals-timer-options/all-on-one-page-fault-modals-timer-options';
import { AllOnOneFormSubElementHoldNoModalComponent } from '../components/all-on-one-form-sub-element-hold-no-modal/all-on-one-form-sub-element-hold-no-modal';
import { HazardRecorderProvider } from '../providers/hazard-recorder/hazard-recorder';
import { ScreenOrientation } from '@ionic-native/screen-orientation'
import { Insomnia } from '@ionic-native/insomnia';

import { FaultStoreActions } from '../providers/fault-store/fault-store.action';
import { FaultStoreProvider } from '../providers/fault-store/fault-store';
import { ButtonElementComponent } from '../components/button-element/button-element';
import { TotalsComponent } from '../components/totals/totals';
import { NgReduxModule, DevToolsExtension } from '@angular-redux/store';

import { ReportHeaderV2Component } from '../components/report-header-v2/report-header-v2';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'press': { 
      time: 1000
    }
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ComponentLibraryPage,
    HeaderComponent,
    ButtonModalComponent,
    ReportHeaderComponent,
    AllOnOnePageFaultModes,
    TimerComponent,
    AllOnOneFormElementComponent,
    AllOnOneFormFaultModesSubElementComponent,
    ReportHeaderV2Component,
    AllOnOnePage,
    AllOnOnePage3,
    TimerComponent,
    AllOnOneFormElementComponent,
    AllOnOneFormSubElementHoldComponent,
    FaultsScorecardComponent,
    FaultControlsComponent,
    Dl25ButtonsModalsPage,
    Dl25ModalComponent,
    Dl25ModalRowComponent,
    PressedFaultModalComponentAOOP,
    AllOnOnePageFaultModalsTimerOptionsPage,
    ButtonElementComponent,
    ButtonModalComponent,
    TotalsComponent,
    AllOnOneFormSubElementHoldNoModalComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgReduxModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ComponentLibraryPage,
    Dl25ButtonsModalsPage,
    Dl25ModalComponent,
    AllOnOnePageFaultModes,
    AllOnOnePage,
    AllOnOnePage3,
    PressedFaultModalComponentAOOP,
    AllOnOneFormFaultModesSubElementComponent,
    AllOnOnePageFaultModalsTimerOptionsPage,
    ButtonModalComponent,
    AllOnOneFormSubElementHoldNoModalComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
    FaultsScorecardProvider,
    FaultDataProvider,
    FaultModeProvider,
    FaultStoreActions,
    DevToolsExtension,
    FaultStoreProvider,
    HazardRecorderProvider,
    ScreenOrientation,
    Insomnia,
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
