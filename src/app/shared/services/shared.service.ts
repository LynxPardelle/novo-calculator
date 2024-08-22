import { Injectable } from '@angular/core';
import { svgTotal, TTotalSvg } from './svgs/svg.total';
import { TNumber3, TNumber5 } from '../types/numbers.type';

export type TMultiplyMatricesReq =
  | {
      row: TNumber5;
      column: TNumber5;
    }
  | {
      row: TNumber3;
      column: TNumber3;
    };
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public svgTotal: TTotalSvg = svgTotal;
  constructor() {}

  getRandomId(length: number): string {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  checkElementValue(elementId: string, value: string): number {
    let element: any = document.getElementById(elementId);
    return !!element ? element[value] : 0;
  }

  getHtml(type: string) {
    switch (true) {
      case type === 'arriba':
        return `
      ${this.svgTotal.thumbsUp}`;

      case type === 'abajo':
        return `
      ${this.svgTotal.thumbsDown}`;

      case type === 'poligonArrow':
        return `${this.svgTotal.poligonArrow}`;

      case type === 'hipertension':
        return `
      ${this.svgTotal.heart}
        <span class="bef bef-color-HASHcbcfd5 bef-d-flex jusCon-center aliIte-center bef-m-0">Hipertensión</span>
      `;

      case type === 'dislipidemia':
        return `
      ${this.svgTotal.drop}
        <span class="bef bef-color-HASHcbcfd5 bef-d-flex jusCon-center aliIte-center bef-m-0 ">Dislipidemia</span>`;

      case type === 'prediabetes':
        return `
      ${this.svgTotal.machine}
        <span class="bef bef-color-HASHcbcfd5 bef-d-flex jusCon-center aliIte-center bef-m-0 ">Prediabetes</span>`;

      case type === 'grade1':
        return `
        ${this.svgTotal.fatSingle}
          <span class="bef bef-color-HASHcbcfd5 bef-d-flex jusCon-center aliIte-center bef-m-0 ">Grado I</span>`;

      case type === 'grade2':
        return `
          ${this.svgTotal.fatSingle}
            <span class="bef bef-color-HASHcbcfd5 bef-d-flex jusCon-center aliIte-center bef-m-0 ">Grado II</span>`;

      case type === 'grade3':
        return `
            ${this.svgTotal.fatSingle}
              <span class="bef bef-color-HASHcbcfd5 bef-d-flex jusCon-center aliIte-center bef-m-0 ">Grado III</span>`;
      default:
        let svgTotal: any = this.svgTotal;
        return svgTotal[type] || '';
    }
  }

  capitalizeFirstLetter(st: string) {
    return st.charAt(0).toUpperCase() + st.slice(1);
  }

  multiplyMatrices(args: TMultiplyMatricesReq): number {
    const { row, column } = args;
    if (row.length !== column.length) {
      throw new Error('Las matrices deben tener el mismo tamaño');
    }

    let result = 0;
    for (let i = 0; i < row.length; i++) {
      result += row[i] * column[i];
    }
    return result;
  }

  detectCeilOrFloor(value: number) {
    if (value.toString().includes('.')) {
      if (Number.parseInt(value.toString().split('.')[1]) <= 5) {
        return Math.floor(value);
      } else {
        return Math.ceil(value);
      }
    } else {
      return value;
    }
  }
}
