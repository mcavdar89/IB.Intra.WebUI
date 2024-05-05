import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonelDto } from '../../models/personel/personel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {

  constructor(
    private http: HttpClient
  ) { }


  getPersonelList(): Observable<PersonelDto[]>{

    return this.http.get<PersonelDto[]>("http://localhost:5200/api/Personel/list");
  }

 getPersonelDetay(id:number): Observable<PersonelDto>{
    return this.http.get<PersonelDto>("http://localhost:5200/api/Personel/getnufus/"+id);
  }
  kaydetNufus(data:PersonelDto): Observable<PersonelDto>{
    return this.http.post<PersonelDto>("http://localhost:5200/api/Personel/kaydetnufus",data);
  }
  guncelleNufus(data:PersonelDto): Observable<PersonelDto>{
    return this.http.post<PersonelDto>("http://localhost:5200/api/Personel/guncellenufus",data);
  }
}
