import { Component } from '@angular/core';
/* Services */
import { SharedService } from '../../../shared/services/shared.service';
/* Pipes */
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'treatment-cost',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './treatment-cost.component.html',
  styleUrl: './treatment-cost.component.scss',
})
export class TreatmentCostComponent {
  constructor(private _sharedService: SharedService) {}
  public thermo1: string = this._sharedService.getHtml('thermo1');
  public thermo2: string = this._sharedService.getHtml('thermo2');
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
