import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query : String;
  limit : Number;
  products = [];
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }

  searchProducts(limit : Number, query : String) {
    this.dataService.searchProduct(limit, query).subscribe((data: any[]) => {
      this.products = data;
    });
  }
}
