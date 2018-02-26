import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HeaderComponent } from '../components/header/header';
import { ComponentLibraryPage } from '../pages/component-library/component-library';
import { BackLinkComponent } from '../components/back-link/back-link';
import { ReportHeaderComponent } from '../components/report-header/report-header';
import { TimerComponent } from '../components/timer/timer';

import { SidebarPrototypePage } from '../pages/sidebar-prototype/sidebar-prototype';
import { TablePage } from '../components/table/table';
import { FailCounter } from '../components/fail-counter/fail-counter';
import { LegalPage } from '../pages/legal/legal';
import { FaultsScorecardComponent } from '../components/faults-scorecard/faults-scorecard';
import { FaultsScorecardProvider } from '../providers/faults-scorecard/faults-scorecard';
import { FaultControlsComponent } from '../components/fault-controls/fault-controls';
import { NotesPage } from '../pages/notes/notes';

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
    TimerComponent,
    SidebarPrototypePage,
    FaultsScorecardComponent,
    FaultControlsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TablePage,
    FailCounter,
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
