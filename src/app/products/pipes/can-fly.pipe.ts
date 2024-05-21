import { Pipe, PipeTransform } from '@angular/core';
import { log } from 'console';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): string {
    return (value) ? "Si Vuela" : "No Vuela";
  }

}
