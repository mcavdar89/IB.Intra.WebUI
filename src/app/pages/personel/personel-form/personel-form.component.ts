import { Component, Input, OnInit } from '@angular/core';
import { PersonelService } from '../../../services/personel/personel.service';
import { PersonelDto } from '../../../models/personel/personel.model';

@Component({
  selector: 'app-personel-form',
  templateUrl: './personel-form.component.html',
  styleUrl: './personel-form.component.scss'
})
export class PersonelFormComponent implements OnInit{ 
  @Input() id: number = 0;
  data?:PersonelDto;
  constructor(private service: PersonelService) {
    
  }
  ngOnInit(): void {
    //datayı  çekiyorsunuz

    this.service.getPersonelDetay(this.id).subscribe(resp => {
      console.log(resp);
      this.data = resp;
    });


  }


  kaydet(){
    this.service.kaydetNufus(this.data!!).subscribe(resp => {
      this.data = resp;
      console.log(resp);
    });
  }
  guncelle(){ 
    this.service.guncelleNufus(this.data!!).subscribe(resp => {
      this.data = resp;
      console.log(resp);
    });
  }

}
