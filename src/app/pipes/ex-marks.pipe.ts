import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exMarks'
})
export class ExMarksPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
