import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collectedData: Data[];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.collectedData = this.data.collectIn;
    console.log(this.collectedData);
  }

  removeCollection(item): void {
    this.data.removeCollection(item);
  }
}
