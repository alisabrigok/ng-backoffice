import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginLayoutModule } from './layouts/login-layout/login-layout.module';
import { DashboardLayoutModule } from './layouts/dashboard-layout/dashboard-layout.module';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginLayoutModule,
    DashboardLayoutModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [App],
})
export class AppModule {}
