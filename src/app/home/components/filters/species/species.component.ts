import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CharactersService } from 'src/app/home/services/characters.service';
import { FilterModel } from 'src/app/home/models/filter-model';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  speciesForm: FormGroup;
  human: boolean;
  alien: boolean;

  constructor(private filter: CharactersService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.human = false;
    this.alien = false;
    this.filter.currentFilter.subscribe((item: FilterModel) => {
      if (item) {
        if (item.filterName === 'Alien') {
          this.alien = item.status;
        } else if (item.filterName === 'Human') {
          this.human = item.status;
        }
      }
    });
  }

  onSpeciesChange(event, val) {
    this.filter.changeCategory({ filterCategory: 'species', filterName: val, status: event.target.checked });
  }
}
