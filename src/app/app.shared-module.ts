import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxBulletModule, DxButtonModule, DxDataGridModule, DxFormModule, DxPopupModule, DxTemplateModule, DxTextBoxModule, DxToastModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,

    // DevExtreme
    DxButtonModule,
    DxPopupModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxFormModule,
    DxTextBoxModule,
    DxToastModule,
  ],
  exports: [
    HttpClientModule,

   // DevExtreme
   DxButtonModule,
   DxPopupModule,
   DxDataGridModule,
   DxTemplateModule,
   DxBulletModule,
   DxFormModule,
   DxTextBoxModule,
   DxToastModule,
  ],
  providers: []
})
export class AppSharedModule { }
