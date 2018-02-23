import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { TablePage } from '../pages/table/table';
import { FailCounter } from '../pages/fail-counter/fail-counter';
import { LegalPage } from '../pages/legal/legal';

import { HeaderComponent } from '../components/header/header';
import { ComponentLibraryPage } from '../pages/component-library/component-library';
import { BackLinkComponent } from '../components/back-link/back-link';
import { ReportHeaderComponent } from '../components/report-header/report-header';
import { TimerComponent } from '../components/timer/timer';
import { SidebarPrototypePage } from '../pages/sidebar-prototype/sidebar-prototype';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TablePage,
    FailCounter,
    LegalPage,
    ComponentLibraryPage,
    HeaderComponent,
    BackLinkComponent,
    ReportHeaderComponent,
    TimerComponent,
    SidebarPrototypePage,
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
