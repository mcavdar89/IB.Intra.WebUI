import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule } from 'devextreme-angular';
import {  HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppSharedModule } from './app.shared-module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { loadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppSharedModule,


    AppRoutingModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([loadingInterceptor])),
    
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useFactory: loadingInterceptor,
    //   multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
