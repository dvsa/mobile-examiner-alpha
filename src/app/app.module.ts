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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TwoColPage,
    ManoeuvrePage,
    CompetencyPage
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
    CompetencyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
