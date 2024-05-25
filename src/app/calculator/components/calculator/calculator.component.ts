import { Component } from '@angular/core';
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';
import { ComorbiditiesComponent } from '../comorbidities/comorbidities.component';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { SharedService } from '../../../shared/services/shared.service';
import { SharedModule } from '../../../shared/shared.module';
import { GenericSpanComponent } from '../../../shared/components/generic-span/generic-span.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    GenericInputComponent,
    GenericButtonComponent,
    GenericSpanComponent,
    ComorbiditiesComponent,
    SafeHtmlPipe,
    SharedModule,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  constructor(private _sharedService: SharedService) {}
  trueClasses: string =
    'bef bef-bg-novo bef-bw-0 bef-w-100per bef-color-white bef-mb-0_5rem bef-p-0_5rem';
  falseClasses: string =
    'bef bef-bg-#b2b7bf bef-bw-0 bef-w-100per bef-color-gray bef-mb-0_5rem bef-p-0_5rem';
  trueColors: string =
    'bef bef-bg-novo bef-bw-0 bef-w-auto bef-color-white bef-mx-0_5rem';
  falseColors: string =
    'bef bef-d-flex bef-bg-#b2b7bf bef-bw-0 bef-w-auto bef-color-gray bef-mx-0_5rem';
  filledClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-rt-5px bef-bg-rgbaSD184COM__201COM__214COM__0_2ED  bef-wmn-6rem bef-w-100per bef-wmx-10rem bef-h-2_5rem bef  bef-p-0_5rem';
  emptyClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-rt-5px bef-bg-rgbaSD184COM__201COM__214COM__0_2ED  bef-wmn-6rem bef-w-100per bef-wmx-10rem bef-h-2_5rem bef  bef-p-0_5rem';


  grado1 = this._sharedService.getHtml('grado1');
  grado2 = this._sharedService.getHtml('grado2');
  grado3 = this._sharedService.getHtml('grado3');
  fatDouble = this._sharedService.getHtml('fatDouble');
  thumbsup = this._sharedService.getHtml('thumbsup');
  thumbsdown = this._sharedService.getHtml('thumbsdown');
  arrowRight = this._sharedService.getHtml('arrowRight');
  arrowLeft = this._sharedService.getHtml('arrowLeft');
  arrowDown = this._sharedService.getHtml('arrowDown');
}
