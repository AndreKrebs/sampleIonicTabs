import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';

// modulos add
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'; // precisa adicionar o httpModule para que seja possivel atualizar a tela depois de receber os dados do servidor
import { MovieProvider } from '../providers/movie/movie';
import { ConfigurationPageModule } from '../pages/configuration/configuration.module';
import { UserProfilePageModule } from '../pages/user-profile/user-profile.module';
import { AboutAppPageModule } from '../pages/about-app/about-app.module';
import { MenuConfigPageModule } from '../pages/menu-config/menu-config.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    HttpClientModule,
    ConfigurationPageModule,
    UserProfilePageModule,
    AboutAppPageModule, 
    MenuConfigPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
