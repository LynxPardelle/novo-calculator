import { Component, Input } from '@angular/core';
import { GenericSpanComponent } from '../../../shared/components/generic-span/generic-span.component';
/*Types */
import { TSemanas } from '../../types/semanas.type';

import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'liraglutide-cost',
  standalone: true,
  imports: [GenericSpanComponent, CurrencyPipe, SafeHtmlPipe, JsonPipe, CurrencyPipe],
  templateUrl: './liraglutide-cost.component.html',
  styleUrl: './liraglutide-cost.component.scss',
})
export class LiraglutideCostComponent {
  @Input() anualCost: number = 0;

  constructor(private _sharedService: SharedService) {}

  genericClasses: string = `bef `;
  arrowRight: string = this._sharedService.getHtml('arrowRight');
  public treatmentTitles: { title: string; description: string }[] = [
    {
      title: 'Alternativa:',
      description: 'Liraglutida',
    },
    {
      title: 'Presentación:',
      description:
        `Caja de cartón con 3
        plumas precargadas
        con 3 ml (6 mg/ml) `,
    },
    {
      title: 'Clave CNIS:',
      description: '7125.00',
    },

  ];
  public person = this._sharedService.getHtml('person3');

}
