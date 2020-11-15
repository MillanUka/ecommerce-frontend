import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() product;
  name : String;
  price : Number;
  desc : String;
  thumbnail : String;

  constructor() { 
  }

  ngOnInit(): void {
    this.name = this.product.name;
    this.price = this.product.price;
    this.desc = this.product.desc;
    this.thumbnail = this.product.thumbnail;
  }

}
