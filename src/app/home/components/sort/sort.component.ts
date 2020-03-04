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
        console.log('asc');
        this.filterOrderEmitter.emit('asc');
        // this.products.sort((a, b) => b.id - a.id);
        break;
      case 'desc':
        console.log('desc');
        this.filterOrderEmitter.emit('desc');
        // this.products.sort((a, b) => a.id - b.id);
        break;
    }
  }

}
