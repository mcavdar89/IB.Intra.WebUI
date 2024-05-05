import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private app: AppComponent) {




  }
  setLoadingSayac(durum: any) {
    if (durum || durum > 0) {
      this.app.loadingSayac++;
    }else{
      this.app.loadingSayac--;
    }
  }
}
