import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  selected = true;

  constructor() { }

  ngOnInit(): void {
  }

  selectIt(): void {
    this.selected = !this.selected;
  }
}
