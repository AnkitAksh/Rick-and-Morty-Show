import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChange } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Characters } from './../../models/characters';
import { CharactersService } from './../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnChanges, OnInit, OnDestroy {
  // genderType: any;
  characters: Characters[] = [];
  initialCharacters: Characters[] = [];
  filters: any[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  @Input() filterOrderFromParent: string;
  @Input() searchTextFromParent: string;
  ngOnChanges(changes: any) {
    if (changes.filterOrderFromParent) {
      this.filterById(changes.filterOrderFromParent.currentValue);
    }
  }

  constructor(private characterService: CharactersService) { }

  ngOnInit() {
    this.filters = [];
    this.initCharacters();
    this.characterService.currentCategory.subscribe(val => {
      if (val) {
        if (val.status) {
          this.filters.push(val);
        } else {
          const index = this.filters.findIndex(filter => filter.filterName === val.filterName);
          this.filters.splice(index, 1);
        }
      }
      // filter function call
      this.characters = this.characterService.filterCharacters(this.initialCharacters, this.filters);
    });
    this.characterService.currentFilter.subscribe(val => {
      if (val) {
        if (val.status) {
          this.filters.push(val);
        } else {
          const index = this.filters.findIndex(filter => filter.filterName === val.filterName);
          this.filters.splice(index, 1);
        }
      }
      // filter function call
      this.characters = this.characterService.filterCharacters(this.initialCharacters, this.filters);
    });
  }

  initCharacters() {
    this.characterService.getCharacters().pipe(takeUntil(this.destroy$)).subscribe((character: any) => {
      this.characters = character.results;
      this.initialCharacters = [...this.characters];
    });
  }

  filterById(order) {
    switch (order) {
      case 'desc':
        this.characters.sort((a, b) => b.id - a.id);
        break;
      case 'asc':
        this.characters.sort((a, b) => a.id - b.id);
        break;
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
