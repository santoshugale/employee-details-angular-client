import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameAndCityFilter'
})
export class NameAndCityFilterPipe implements PipeTransform {
  public transform(items: any[], search: string): any {
    if (!items) {
      return [];
    }
    if (!search) {
      return items;
    }
    return items.filter(item =>
      item['Name'].toLowerCase().includes(search.toLowerCase()) ||
      item['City'].toLowerCase().includes(search.toLowerCase()));
  }
}
