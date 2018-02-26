import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ManoeuvrePage } from '../pages/multi-tab-proto/manoeuvre/manoeuvre';
import { CompetencyPage } from '../pages/multi-tab-proto/competency/competency';
import { LegalPage } from '../pages/multi-tab-proto/legal/legal';
import { TabsPage } from '../pages/multi-tab-proto/tabs/tabs';
import { HeaderComponent } from '../components/header/header';
import { ComponentLibraryPage } from '../pages/component-library/component-library';
import { BackLinkComponent } from '../components/back-link/back-link';
import { ReportHeaderComponent } from '../components/report-header/report-header';
import { TimerComponent } from '../components/timer/timer';
import { FaultsScorecardComponent } from '../components/faults-scorecard/faults-scorecard';
import { FaultsScorecardProvider } from '../providers/faults-scorecard/faults-scorecard';
import { FaultControlsComponent } from '../components/fault-controls/fault-controls';
import { FaultControlsMultiTabComponent } from '../components/fault-controls-multiTab/fault-controls-multiTab';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ManoeuvrePage,
    CompetencyPage,
    LegalPage,
    ComponentLibraryPage,
    HeaderComponent,
    BackLinkComponent,
    ReportHeaderComponent,
    TimerComponent,
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
    LegalPage,
    ComponentLibraryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FaultsScorecardProvider
  ]
})
export class AppModule {}
