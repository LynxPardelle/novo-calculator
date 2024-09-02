import { Component, EventEmitter, Input, Output } from '@angular/core';
/* Modules */
/* Services */
import { SharedService } from '../../../shared/services/shared.service';
/* Components */
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericSpanComponent } from '../../../shared/components/generic-span/generic-span.component';
/* Pipes */
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { TObesityDegrees } from '../../types/obesityDegrees.type';
import { MathPipe } from '../../../shared/pipes/math.pipe';

@Component({
  selector: 'obesity-degrees',
  standalone: true,
  imports: [
    GenericInputComponent,
    GenericSpanComponent,
    SafeHtmlPipe,
    MathPipe,
  ],
  templateUrl: './obesity-degrees.component.html',
  styleUrl: './obesity-degrees.component.scss',
})
export class ObesityDegreesComponent {
  constructor(private _sharedService: SharedService) {}
  public trueClasses: string =
    'bef bef-bg-novo bef-bw-0 bef-w-100per bef-color-white bef-mb-0_5rem bef-p-0_5rem';
  public falseClasses: string =
    'bef bef-bg-#b2b7bf bef-bw-0 bef-w-100per bef-color-gray bef-mb-0_5rem bef-p-0_5rem';
  public trueColors: string =
    'bef bef-bg-novo bef-bw-0 bef-w-auto bef-color-white bef-mx-0_5rem';
  public falseColors: string =
    'bef bef-d-flex bef-bg-#b2b7bf bef-bw-0 bef-w-auto bef-color-gray bef-mx-0_5rem';
  public filledClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-rt-0_5px bef-bg-rgbaSD184COM__201COM__214COM__0_2ED ';
  public emptyClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-rt-0_5px bef-bg-rgbaSD184COM__201COM__214COM__0_2ED ';

  public grade1 = this._sharedService.getHtml('grade1');
  public grade2 = this._sharedService.getHtml('grade2');
  public grade3 = this._sharedService.getHtml('grade3');
  public arrowRight = this._sharedService.getHtml('arrowRight');
  public person = this._sharedService.getHtml('person2');
  @Input() obesityDegrees: TObesityDegrees = {
    grade1: false,
    grade2: false,
    grade3: false,
  };
  @Input() obesityText: string = '';
  @Input() obesityPatientsPercentage: number = 0;
  @Input() obesityPatients: number = 0;
  @Output() obesityDegreesChange: EventEmitter<TObesityDegrees> =
    new EventEmitter<TObesityDegrees>();
}
