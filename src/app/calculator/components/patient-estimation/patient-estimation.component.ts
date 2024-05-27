import { Component } from '@angular/core';
/* Modules */
/* Services */
import { SharedService } from '../../../shared/services/shared.service';
/* Components */
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericSpanComponent } from '../../../shared/components/generic-span/generic-span.component';
/* Pipes */
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'patient-estimation',
  standalone: true,
  imports: [GenericInputComponent, GenericSpanComponent, SafeHtmlPipe],
  templateUrl: './patient-estimation.component.html',
  styleUrl: './patient-estimation.component.scss',
})
export class PatientEstimationComponent {
  constructor(private _sharedService: SharedService) {}
  public filledClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-rt-5px bef-bg-rgbaSD184COM__201COM__214COM__0_2ED  bef-wmn-6rem bef-w-100per bef-wmx-10rem bef-h-2_5rem bef  bef-p-0_5rem';
  public emptyClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-rt-5px bef-bg-rgbaSD184COM__201COM__214COM__0_2ED  bef-wmn-6rem bef-w-100per bef-wmx-10rem bef-h-2_5rem bef  bef-p-0_5rem';
  public arrowRight = this._sharedService.getHtml('arrowRight');
  public fatDouble = this._sharedService.getHtml('fatDouble');
}
