import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSum5'
})
export class PipeSum5Pipe implements PipeTransform {

  transform(value: number, args?: number): number {
    return value + 5;
  }

}
