import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {

    let keys:any =[];
     for( let key in value){
       keys.push(key)
     }
    return keys;
  }

}
