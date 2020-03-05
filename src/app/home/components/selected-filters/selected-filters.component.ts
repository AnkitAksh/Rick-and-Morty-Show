import { Component, OnInit, SimpleChange } from '@angular/core';
import { CharactersService } from 'src/app/home/services/characters.service';

@Component({
  selector: 'app-selected-filters',
  templateUrl: './selected-filters.component.html',
  styleUrls: ['./selected-filters.component.css']
})
export class SelectedFiltersComponent implements OnInit {

  filterList: any;

  constructor(private filter: CharactersService) { }

  ngOnInit() {
    this.filterList = [];
    this.filter.currentFilter.subscribe(message => {
      if (message) {
        if (message.status) {
          this.filterList.push(message.filterName);
        } else {
          const index = this.filterList.indexOf(message.filterName);
          this.filterList.splice(index, 1);
        }
      }
    });
  }

  close(val) {
    const index = this.filterList.indexOf(val);
    this.filterList.splice(index, 1);
    // behaviour subj
    this.filter.changeFilter1({ filterCategory: 'species', filterName: val, status: false });
  }

}
