import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  keyUpEvent(fname) {
    
      console.log("First name: {{fname}}" + fname);
    
  }
  showTitle($event) {
    this.title = $event;
    console.log("From Parent: " + this.title);
  }
}
