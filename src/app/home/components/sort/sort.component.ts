import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  @Output() filterOrderEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  shortById(order) {
    switch (order) {
      case 'asc':
        this.filterOrderEmitter.emit('asc');
        break;
      case 'desc':
        this.filterOrderEmitter.emit('desc');
        break;
    }
  }

}
