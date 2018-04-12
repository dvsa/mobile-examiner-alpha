import { ErrorHandler, NgModule } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { SignaturePadModule } from 'angular2-signaturepad';
import { TestResultPage } from '../pages/test-result/test-result';
import { TrainerModePage } from '../pages/trainer-mode/trainer-mode';
import { PostTestSummaryPage } from '../pages/post-test-summary/post-test-summary';
import { ComponentsModule } from '../components/components.module';
import { WeatherSelectorComponent } from '../components/weather-selector/weather-selector';
import { JournalProvider } from '../providers/journal/journal';
import { DateTimeUtility } from '../shared/utils/datetime';
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
    TestResultPage,
    TrainerModePage,
    PostTestSummaryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(App),
    ComponentsModule,
    HttpClientModule,
    SignaturePadModule
  ],
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
    TestResultPage,
    TrainerModePage,
    PostTestSummaryPage,
    WeatherSelectorComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AppConfigProvider,
    JournalProvider,
    DateTimeUtility
  ]
})
export class AppModule {}
