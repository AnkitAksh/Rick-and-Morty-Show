import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Characters } from './../../models/characters';
import { CharactersService } from './../../services/characters.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {

  @Input() filterOrderFromParent: string;
  characters: Characters[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private characterService: CharactersService) { }

  ngOnInit() {
    this.initCharacters();
    // this.filterById();
  }

  initCharacters() {
    this.characterService.getCharacters().pipe(takeUntil(this.destroy$)).subscribe((character: any) => {
      this.characters = character.results;
      console.log('characters -->', this.characters);
    });
  }

  filterById(val) {
    console.log(this.filterOrderFromParent);
    switch (val) {
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
