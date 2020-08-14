import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  collectData: Data[] = [];

  marketData: Data[] = [
    {
      description: 'Mioniz Sause',
      type: 'Sause'},
    {
      description: 'Gripfrut',
      type: 'Frut'
    },
    {
      description: 'Cooper Cable',
      type: 'Cable'
    },
    {
      description: 'UFO Art',
      type: 'Photo'
    },
    {
      description: 'Cammel Cigar',
      type: 'Cigar'
    }
  ];

  constructor() { }

  get marketIn(): Data[] {
    return this.marketData;
  }

  get collectIn(): Data[] {
    return this.collectData;
  }

  addCollection(item): void {
    if (this.collectData.indexOf(item) === -1 ) {
      this.collectData.push(item);
    }
  }

  removeCollection(item): void {
    this.collectData.splice(this.collectData.indexOf(item), 1);
  }
}
