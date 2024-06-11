import { Injectable } from '@angular/core';
import { svgTotal, TTotalSvg } from './svgs/svg.total';

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

      case type === 'bascula':
        return `
        ${this.svgTotal.bascula}`;

      case type === 'estetoscopio':
        return `
        ${this.svgTotal.estetoscopio}`;

      case type === 'thermo1':
        return `
        ${this.svgTotal.thermo1}`;

      case type === 'thermo2':
        return `
        ${this.svgTotal.thermo2}`;

      case type === 'apple':
        return `
        ${this.svgTotal.apple}`;

      case type === 'arrowRight':
        return `
        ${this.svgTotal.arrowRight}`;

      case type === 'whiteArrowRight':
        return `
        ${this.svgTotal.whiteArrowRight}`;

      case type === 'arrowLeft':
        return `
        ${this.svgTotal.arrowLeft}`;

      case type === 'fatDouble':
        return `
        ${this.svgTotal.fatDouble}`;

      default:
        let svgTotal: any = this.svgTotal;
        return svgTotal[type] || '';
    }
  }

  capitalizeFirstLetter(st: string) {
    return st.charAt(0).toUpperCase() + st.slice(1);
  }
}
