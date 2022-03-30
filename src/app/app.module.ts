import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './admin/login-page/login-page.component';
import { DashboardPageComponent } from './admin/dashboard-page/dashboard-page.component';
import { MainPageComponent } from './homepage/main-page/main-page.component';
import { HeaderComponent } from './homepage/shared/components/header/header.component';
import { HeroComponent } from './homepage/shared/components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    MainPageComponent,
    HeaderComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
