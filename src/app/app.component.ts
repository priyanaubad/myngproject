import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyNgProject';
  constructor(){
    setTimeout(()=> {
      this.title="changed title";
    },2000);
  }
}
