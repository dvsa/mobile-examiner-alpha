import { ErrorHandler, NgModule } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app.component';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { CandidateInfoPage } from '../pages/candidate-info/candidate-info';
import { CollectLicenseSignaturePage } from '../pages/collect-license-signature/collect-license-signature';
import { DeclarationConsentPage } from '../pages/declaration-consent/declaration-consent';
import { EndTestReasonPage } from '../pages/end-test-reason/end-test-reason';
import { InitiateDrivingPeriodPage } from '../pages/initiate-driving-period/initiate-driving-period';
import { InitiateSwapPage } from '../pages/initiate-swap/initiate-swap';
import { JournalPage } from '../pages/journal/journal';
import { LdtmModePage } from '../pages/ldtm-mode/ldtm-mode';
import { ManageDeviceDebriefStoragePage } from '../pages/manage-device-debrief-storage/manage-device-debrief-storage';
import { PolicyDataPage } from '../pages/policy-data/policy-data';
import { PretestChecksPage } from '../pages/pretest-checks/pretest-checks';
import { RecordDebriefPage } from '../pages/record-debrief/record-debrief';
import { SignaturePadModule } from 'angular2-signaturepad';
import { StopTestPage } from '../pages/stop-test/stop-test';
import { TestEvaluationPage } from '../pages/test-evaluation/test-evaluation';
import { TestResultPage } from '../pages/test-result/test-result';
import { TrainerModePage } from '../pages/trainer-mode/trainer-mode';
import { WeatherPhysicalDescriptionPage } from '../pages/weather-physical-description/weather-physical-description';
import { ComponentsModule } from '../components/components.module';
import { AppConfigProvider } from '../providers/app-config/app-config';

@NgModule({
  declarations: [
    App,
    LoginPage,
    DashboardPage,
    CandidateInfoPage,
    CollectLicenseSignaturePage,
    DeclarationConsentPage,
    EndTestReasonPage,
    InitiateDrivingPeriodPage,
    InitiateSwapPage,
    JournalPage,
    LdtmModePage,
    ManageDeviceDebriefStoragePage,
    PolicyDataPage,
    PretestChecksPage,
    RecordDebriefPage,
    StopTestPage,
    TestEvaluationPage,
    TestResultPage,
    TrainerModePage,
    WeatherPhysicalDescriptionPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(App), ComponentsModule, SignaturePadModule],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    LoginPage,
    DashboardPage,
    CandidateInfoPage,
    CollectLicenseSignaturePage,
    DeclarationConsentPage,
    EndTestReasonPage,
    InitiateDrivingPeriodPage,
    InitiateSwapPage,
    JournalPage,
    LdtmModePage,
    ManageDeviceDebriefStoragePage,
    PolicyDataPage,
    PretestChecksPage,
    RecordDebriefPage,
    StopTestPage,
    TestEvaluationPage,
    TestResultPage,
    TrainerModePage,
    WeatherPhysicalDescriptionPage
  ],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler },
    AppConfigProvider]
})
export class AppModule {}
