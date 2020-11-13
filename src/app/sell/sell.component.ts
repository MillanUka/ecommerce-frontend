import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  name : String;
  price : Number;
  desc : String;
  thumbnail : String;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }

  submit(name : String, price : Number, desc : String, thumbnail : String) : void {
    this.dataService.submitProduct(name, price, desc, thumbnail).subscribe((data: any[])=>{
      console.log(data);
      alert("Login was successful!");
    });
  }

  get user() {
    return this.dataService.currentUser;
  }
}
