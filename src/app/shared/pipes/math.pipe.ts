import { Pipe, PipeTransform } from '@angular/core';

export type TMathArgs =
  | {
      value: number | string;
      operation: 'add' | 'sub' | 'mul' | 'div' | 'roundDigit';
    }
  | {
      operation: 'floor' | 'ceil' | 'round';
    };
@Pipe({
  name: 'math',
  standalone: true,
})
export class MathPipe implements PipeTransform {
  transform(value: number | string, args: TMathArgs[]): number {
    return args.reduce((acc, arg) => {
      if (typeof acc === 'string') {
        acc = parseFloat(acc);
      }
      switch (arg.operation) {
        case 'add':
          if (typeof arg.value === 'string') {
            arg.value = parseFloat(arg.value);
          }
          return acc + arg.value;
        case 'sub':
          if (typeof arg.value === 'string') {
            arg.value = parseFloat(arg.value);
          }
          return acc - arg.value;
        case 'mul':
          if (typeof arg.value === 'string') {
            arg.value = parseFloat(arg.value);
          }
          return acc * arg.value;
        case 'div':
          if (typeof arg.value === 'string') {
            arg.value = parseFloat(arg.value);
          }
          return acc / arg.value;
        case 'floor':
          return Math.floor(acc);
        case 'ceil':
          return Math.ceil(acc);
        case 'round':
          return Math.round(acc);
        case 'roundDigit':
          if (typeof arg.value === 'string') {
            arg.value = parseFloat(arg.value);
          }
          return (
            Math.round(acc * Math.pow(10, arg.value)) / Math.pow(10, arg.value)
          );
        default:
          return acc;
      }
    }, value as number);
  }
}
