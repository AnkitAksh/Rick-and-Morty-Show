import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  transform(date: Date): any {
    const current = new Date();
    const old = new Date(date);
    return current.getFullYear() - old.getFullYear();
  }

}
