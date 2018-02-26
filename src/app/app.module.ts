import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ManoeuvrePage } from '../pages/two-col-proto/manoeuvre/manoeuvre';
import { CompetencyPage } from '../pages/two-col-proto/competency/competency';
import { TwoColPage } from '../pages/two-col-proto/two-column/two-col';
import { HeaderComponent } from '../components/header/header';
import { ComponentLibraryPage } from '../pages/component-library/component-library';
import { BackLinkComponent } from '../components/back-link/back-link';
import { ReportHeaderComponent } from '../components/report-header/report-header';
import { TimerComponent } from '../components/timer/timer';
import { FaultsScorecardComponent } from '../components/faults-scorecard/faults-scorecard';
import { FaultsScorecardProvider } from '../providers/faults-scorecard/faults-scorecard';
import { FaultControlsComponent } from '../components/fault-controls/fault-controls';
import { FaultControlsMultiColComponent } from '../components/fault-controls-multiCol/fault-controls-multiCol';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TwoColPage,
    ManoeuvrePage,
    CompetencyPage,
    ComponentLibraryPage,
    HeaderComponent,
    BackLinkComponent,
    ReportHeaderComponent,
    TimerComponent,
    FaultsScorecardComponent,
    FaultControlsComponent,
    FaultControlsMultiColComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TwoColPage,
    ManoeuvrePage,
    CompetencyPage,
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
