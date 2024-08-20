import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'service'
})
export class ServicePipe implements PipeTransform {

  transform(dataList: any, searchQuery: string): any {
    if(!dataList) {
      return [];
    }
    if(!searchQuery) {
      return dataList;
    }
    searchQuery = searchQuery.toLocaleLowerCase();
    return dataList.filter((val:any)=>val.title.toLocaleLowerCase().includes(searchQuery) || val.description.toLocaleLowerCase.includes(searchQuery))
  }

}
