import { Component } from '@angular/core';
/* Services */
import { SharedService } from '../../../shared/services/shared.service';
/* Components */
import { GenericSpanComponent } from '../../../shared/components/generic-span/generic-span.component';
/* Pipes */
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'treatment-cost',
  standalone: true,
  imports: [GenericSpanComponent, SafeHtmlPipe],
  templateUrl: './treatment-cost.component.html',
  styleUrl: './treatment-cost.component.scss',
})
export class TreatmentCostComponent {
  constructor(private _sharedService: SharedService) {}
  public filledClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-bcb-oranvo  bef-rt-5px bef-bg-white bef-ms-1rem bef-wmn-5rem bef-w-80per bef-wmx-10rem bef-h-2_5rem bef-p-0_5rem';
  public emptyClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-bcb-oranvo  bef-rt-5px bef-bg-white bef-ms-1rem bef-wmn-5rem bef-w-80per bef-wmx-10rem bef-h-2_5rem bef-p-0_5rem';
  public thermo1: string = this._sharedService.getHtml('thermo1');
  public thermo2: string = this._sharedService.getHtml('thermo2');
  public arrowRight = this._sharedService.getHtml('arrowRight');
  public treatmentTitles: { title: string; description: string }[] = [
    {
      title: 'Alternativa:',
      description: 'Liraglutida',
    },
    {
      title: 'Presentación:',
      description: 'Caja de cartón con 3 plumas precargadas con 3 ml (6 mg/ml)',
    },
  ];
}
