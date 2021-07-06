import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCelsuis'
})
export class ToCelsuisPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value -273.15;
  }

}
