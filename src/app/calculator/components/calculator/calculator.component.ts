import { Component } from '@angular/core';
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';
import { ComorbiditiesComponent } from '../comorbidities/comorbidities.component';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    GenericInputComponent,
    GenericButtonComponent,
    ComorbiditiesComponent,
    SafeHtmlPipe,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  trueClasess: string = 'bef bef-bg-novo bef-bw-0 bef-w-100per bef-color-white';
  falseClasess: string = 'bef bef-bg-#b2b7bf bef-bw-0 bef-w-100per';
  trueColors: string = 'bef-color-novo';
  falseColors: string = 'bef-color-#b2b7bf';

  fatSingle: string = `

<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.44 50.31" width="6rem" height="4rem" class="">
<defs>
  <style>
    .cls-1 {
      fill: none;
      stroke: #000;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1.31px;
    }
  </style>
</defs>
<g id="CONTENT">
  <g>
    <path class="cls-1" d="M7.09,14.66c-.95,1.66-3.39,10.52-1.33,13.37-.76,1.92,.11,5.92,1.67,13.16,.5,2.33,.97,4.53,1.21,6.18,.19,1.32,1.29,2.28,2.63,2.28,1.49,0,2.73-1.21,2.75-2.71l-.22-16.98c0-.36-.01-.65,.36-.65,.33,0,.33,.25,.33,.65l-.22,16.98c.03,1.49,1.26,2.71,2.75,2.71,1.34,0,2.37-.97,2.63-2.28,1.79-8.88,4.36-15.16,2.87-19.35,2.07-2.86-.38-11.71-1.33-13.37"/>
    <path class="cls-1" d="M13.88,9.41c-2.42,0-3.54-2.39-3.58-4.76-.04-2.5,1.24-3.99,3.43-3.99s3.53,1.49,3.57,3.99c.04,2.37-1,4.76-3.41,4.76Z"/>
    <g>
      <path class="cls-1" d="M24.24,27.98c.1,1.04,.19,2.27,1.77,2.23,1.46-.04,1.77-.91,1.77-1.67-.04-5.64-1.07-9.31-2.24-12.43-1.17-3.13-3.26-4.94-5.75-5.94-.92-.37-2.77-.84-4.1-.97"/>
      <path class="cls-1" d="M4.2,27.98c-.1,1.04-.19,2.27-1.77,2.23-1.46-.04-1.77-.91-1.77-1.67,.04-5.64,.92-9.31,2.09-12.43,1.17-3.13,3.26-4.94,5.75-5.94,.41-.16,1.02-.35,1.67-.52"/>
    </g>
  </g>
</g>
</svg>
  `;
  thumbsUp: string = `
  <svg xmlns="http://www.w3.org/2000/svg"
    height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
    <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5
    23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9
    20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174
    174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/>
  </svg>`;

  getHtml(type: string) {
    switch (true) {
      case type === 'grado1':
        return `
        ${this.fatSingle}
        <p class="bef bef-d-flex jusCon-center aliIte-center bef-m-0 ">Grado I</p>
      `;
      case type === 'grado2':
        return `
        ${this.fatSingle}
        <p class="bef bef-d-flex jusCon-center aliIte-center bef-m-0 ">Grado II</p>`;

      case type === 'grado3':
        return `
        ${this.fatSingle}
        <p class="bef bef-d-flex jusCon-center aliIte-center bef-m-0 ">Grado III</p>`;

      case type === 'arriba':
        return `
      ${this.thumbsUp}`;

      default:
        return '';
    }
  }

  ClickId(event: string) {
    console.log(event);
  }

  checkBoxChange(event: string) {}
}
