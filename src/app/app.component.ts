import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title : String = 'Ecommerce Frontend';
  constructor(private dataService : DataService) { }

  get email() : String {
    var user = this.dataService.currentUser;
    if(user !== null) {
      return user.email;
    }

    return "";
  }
}