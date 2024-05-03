import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonelRoutingModule } from './personel-routing.module';
import { PersonelListComponent } from './personel-list/personel-list.component';
import { PersonelFormComponent } from './personel-form/personel-form.component';
import { IzinListComponent } from './izin-list/izin-list.component';
import { IzinFormComponent } from './izin-form/izin-form.component';
import { AppSharedModule } from '../../app.shared-module';
import { PersonelKartComponent } from './personel-kart/personel-kart.component';


@NgModule({
  declarations: [
    PersonelListComponent,
    PersonelFormComponent,
    IzinListComponent,
    IzinFormComponent,
    PersonelKartComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule,
    PersonelRoutingModule,
   
  ]
})
export class PersonelModule { }
