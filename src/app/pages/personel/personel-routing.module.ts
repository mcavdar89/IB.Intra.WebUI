import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonelListComponent } from './personel-list/personel-list.component';

const routes: Routes = [
  //root path localhost:4200/personellist
  {path:'',component:PersonelListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonelRoutingModule { }
