import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CharactersService } from 'src/app/home/services/characters.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FilterModel } from 'src/app/home/models/filter-model';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {
  // genderForm: FormGroup;
  male: boolean;
  female: boolean;
  constructor(private filter: CharactersService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.filter.currentFilter.subscribe((item: FilterModel) => {
      if (item) {
        if (item.filterName === 'Male') {
          this.male = item.status;
        } else if (item.filterName === 'Female') {
          this.female = item.status;
        }
      }
    });
  }

  onGenderChange(event, val) {
    this.filter.changeCategory({ filterCategory: 'gender', filterName: val, status: event.target.checked });
  }

}
