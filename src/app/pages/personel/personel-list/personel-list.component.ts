import { Component, OnInit } from '@angular/core';
import { PersonelDto } from '../../../models/personel/personel.model';
import { PersonelService } from '../../../services/personel/personel.service';

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrl: './personel-list.component.scss'
})
export class PersonelListComponent implements OnInit {

  list?: PersonelDto[];
  isPersonelKart: boolean = false;

  selecetedValue?: PersonelDto;



  constructor(private service: PersonelService) { }


  ngOnInit(): void {
    console.log('persone oninit 1');
    this.service.getPersonelList().subscribe(data => {
      debugger;
      this.list = data;
      console.log('persone oninit 2');

    });
    console.log('persone oninit 3');

  }
  calculateCellValue = (personel: PersonelDto) => [personel.ad, personel.soyad].join(' ');

  setForm(item: PersonelDto) {
    this.selecetedValue = undefined;
    setTimeout(() => {
      console.log(item);
      this.selecetedValue = item;

      this.isPersonelKart = true;
    }, 10);
  }
}
