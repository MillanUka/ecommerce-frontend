import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: String = 'Ecommerce Frontend';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    if (this.dataService.currentUser === null) {
      this.dataService.checkAuth().subscribe((data) => {
        this.dataService.getUser(data['user']).subscribe((data) => {
          this.dataService.currentUser = data;
        });
      });
    }
  }

  get email(): String {
    var user = this.dataService.currentUser;
    if (user !== null) {
      return user.email;
    }

    return '';
  }
}
