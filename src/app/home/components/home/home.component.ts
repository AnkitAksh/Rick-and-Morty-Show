import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filterOrderById = 'asc';
  constructor() { }

  ngOnInit() {
  }

  receiveFilterOrder($event: string) {
    this.filterOrderById = $event;
    console.log('parent', this.filterOrderById);
  }

}
