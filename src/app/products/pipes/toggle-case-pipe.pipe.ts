import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipePipe implements PipeTransform {

  transform(value: string, param: Boolean): string {
    if(param) {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }
  }

}
