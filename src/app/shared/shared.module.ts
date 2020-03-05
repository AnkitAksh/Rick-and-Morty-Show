import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearPipe } from './pipes/year.pipe';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [YearPipe, SearchPipe],
  imports: [
    CommonModule
  ],
  exports: [
    YearPipe,
    SearchPipe,
  ]
})
export class SharedModule { }
