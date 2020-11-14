import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css'],
})
export class SellComponent implements OnInit {
  name: String;
  price: Number;
  desc: String;
  thumbnail: String;
  isAuth: Boolean;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.checkAuth();
  }

  submit(name: String, price: Number, desc: String, thumbnail: String): void {
    this.checkAuth();
    if (this.isAuth) {
      this.dataService
        .submitProduct(name, price, desc, thumbnail)
        .subscribe((data: any[]) => {
          alert("Product  was successfully added!");
        });
    } else {
      alert("There was an issue!")
    }
  }

  async checkAuth() {
    this.dataService.checkAuth().subscribe((data: any[]) => {
      this.isAuth = true;
    });
  }

  get user() {
    return this.dataService.currentUser;
  }
}
