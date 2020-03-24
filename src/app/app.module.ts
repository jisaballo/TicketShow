import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConciertosPage } from '../pages/conciertos/conciertos';
import { ConciertoDetallesPage } from '../pages/concierto-detalles/concierto-detalles';
import { EntradaPage } from '../pages/entrada/entrada';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RedditDataProvider } from '../providers/reddit-data/reddit-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConciertosPage,
    ConciertoDetallesPage,
    EntradaPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConciertosPage,
    ConciertoDetallesPage,
    EntradaPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RedditDataProvider
  ]
})
export class AppModule {}
