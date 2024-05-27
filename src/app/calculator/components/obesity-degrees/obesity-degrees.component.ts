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
  selector: 'obesity-degrees',
  standalone: true,
  imports: [GenericInputComponent, GenericSpanComponent, SafeHtmlPipe],
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
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-rt-5px bef-bg-rgbaSD184COM__201COM__214COM__0_2ED  bef-wmn-6rem bef-w-100per bef-wmx-10rem bef-h-2_5rem bef  bef-p-0_5rem';
  public emptyClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-rt-5px bef-bg-rgbaSD184COM__201COM__214COM__0_2ED  bef-wmn-6rem bef-w-100per bef-wmx-10rem bef-h-2_5rem bef  bef-p-0_5rem';

  public grado1 = this._sharedService.getHtml('grado1');
  public grado2 = this._sharedService.getHtml('grado2');
  public grado3 = this._sharedService.getHtml('grado3');
  public arrowRight = this._sharedService.getHtml('arrowRight');
}
