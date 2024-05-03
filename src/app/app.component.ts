import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  loading: number = 0;

  title = 'IB.Intra.WebUI';
  helloWorld() {
    alert('Hello world!');
  }


}
