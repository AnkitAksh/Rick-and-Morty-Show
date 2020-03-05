import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchTextEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchByName(name) {
    this.searchTextEmitter.next(name);
  }

}
