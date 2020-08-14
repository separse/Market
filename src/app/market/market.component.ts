import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  marketData: Data[];
  collectData: Data[] = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.marketData = this.data.marketIn;
  }

  addCollection(item): void {
      this.data.addCollection(item);
  }

}
