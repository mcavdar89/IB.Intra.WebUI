import { Component, Input } from '@angular/core';
import { PersonelDto } from '../../../models/personel/personel.model';

@Component({
  selector: 'app-personel-kart',
  templateUrl: './personel-kart.component.html',
  styleUrl: './personel-kart.component.scss'
})
export class PersonelKartComponent {

  @Input() personel?:PersonelDto;


  acikTab:string = 'personel-form';


  setAcikTab(tab:string){
    this.acikTab = tab;
  }



}
