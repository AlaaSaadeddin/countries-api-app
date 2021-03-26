import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest-countries';
  darkMode:boolean = false

  constructor() {}

  ngOnInit() {}

  changeTheme(){
    this.darkMode = !this.darkMode
  }
}
