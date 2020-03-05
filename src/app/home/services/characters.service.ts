import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Characters } from '../models/characters';
import { environment } from 'src/environments/environment';
import { FilterModel } from '../models/filter-model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  // for filters
  private filterSource = new BehaviorSubject(null);
  currentFilter = this.filterSource.asObservable();

  // for filters
  private filterSource1 = new BehaviorSubject(null);
  currentFilter1 = this.filterSource1.asObservable();

  constructor(private http: HttpClient) { }

  changeFilter(message) {
    this.filterSource.next(message);
  }

  changeFilter1(message) {
    this.filterSource1.next(message);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getCharacters(): Observable<Characters[]> {
    return this.http
      .get<Characters[]>(`${environment.apiEndPoint}/api/character`).pipe(catchError(this.handleError));
  }

  filterCharacters(allCharacters: Characters[], selectedFilters: FilterModel[]) {
    // retrun the filtered array
    if (allCharacters.length && selectedFilters.length > 0) {
      const filtered = [];
      for (let i = 0; i <= selectedFilters.length - 1; i++) {
        allCharacters.forEach(character => {
          if (selectedFilters[i].filterCategory === 'gender') {
            if (character.gender === selectedFilters[i].filterName) {
              filtered.push(character);
            }
          } else if (selectedFilters[i].filterCategory === 'species') {
            if (character.species === selectedFilters[i].filterName) {
              filtered.push(character);
            }
          }
        });
      }
      return [...new Set(filtered)];
    } else {  // return the original array if search text is empty
      return allCharacters;
    }
  }

}
