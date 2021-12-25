import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaaaaaaaaaaaaa'
})
export class HexaPipe implements PipeTransform {

  transform(val:any): any {
    return val.toString(16);
  }

}
