import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sortByIdFilter: string;
  searchText: string;
  constructor() { }

  ngOnInit() {
  }

  // TODO: NEED TO RENAME THE FUNCTION NAME
  filterById($event: string) {
    this.sortByIdFilter = $event;
  }

  searchByName($event: string) {
    this.searchText = $event;
  }

  //

}
