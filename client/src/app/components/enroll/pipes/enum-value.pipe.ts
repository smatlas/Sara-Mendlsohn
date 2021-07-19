import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumValue'
})
export class EnumValuePipe implements PipeTransform {

  transform(enumValue:object): string[] {
    return Object.entries(enumValue).slice(0,Object.keys(enumValue).length/2).map(([_,val])=>val)
  }

}
