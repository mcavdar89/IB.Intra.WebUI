import { Component, Injectable, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  loadingSayac: number = 0;

  
  constructor(public loader: LoaderService) {
    console.log('AppComponent.constructor');
  }
  ngOnInit(): void {
    console.log('AppComponent.ngOnInit');
  }



  title = 'IB.Intra.WebUI';
  helloWorld() {
    alert('Hello world!');
  }


}
