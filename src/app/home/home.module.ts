import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SelectedFiltersComponent } from './components/selected-filters/selected-filters.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SpeciesComponent } from './components/filters/species/species.component';
import { GenderComponent } from './components/filters/gender/gender.component';
import { OriginComponent } from './components/filters/origin/origin.component';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    SelectedFiltersComponent,
    FiltersComponent,
    SpeciesComponent,
    GenderComponent,
    OriginComponent,
    SearchComponent,
    SortComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    SelectedFiltersComponent,
    FiltersComponent,
    SpeciesComponent,
    GenderComponent,
    OriginComponent,
    SearchComponent,
    SortComponent
  ]
})
export class HomeModule { }
