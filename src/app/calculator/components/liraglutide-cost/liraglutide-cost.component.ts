import { Component, Input } from '@angular/core';
import { GenericSpanComponent } from '../../../shared/components/generic-span/generic-span.component';
/*Types */
import { TSemanas } from '../../types/semanas.type';

import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { JsonPipe } from '@angular/common';
import { SharedService } from '../../../shared/services/shared.service';


@Component({
  selector: 'liraglutide-cost',
  standalone: true,
  imports: [GenericSpanComponent, SafeHtmlPipe, JsonPipe],
  templateUrl: './liraglutide-cost.component.html',
  styleUrl: './liraglutide-cost.component.scss',
})
export class LiraglutideCostComponent {

@Input() anualCost: number = 0;

constructor(private _sharedService:SharedService) { }
  semanas: TSemanas[] = [
    { semana: 'Semana 1:', dosis: ' '+'0.6 mg al día', color: 'oranvo', size: 'small'},
    { semana: 'Semana 2:', dosis: ' '+'1.2 mg al día', color: 'oranvo', size: 'small' },
    { semana: 'Semana 3:', dosis: ' '+'1.8 mg al día', color: 'oranvo', size: 'small' },
    { semana: 'Semana 4:', dosis: ' '+'2.4 mg al día', color: 'oranvo', size: 'small' },
    { semana: 'Semana 5+:', dosis: ' '+'3.0 mg al día', color: 'rovo', size: 'small' },
    { mantenimiento: '48 semanas en dosis de mantenimiento', color: 'rovo', size: 'large' },
  ];
  genericClasses: string = `bef `;
  arrowRight: string = this._sharedService.getHtml('arrowRight');

  getClasses(color: string, size?: string) {
    switch (`${color}-${size}`) {
      case 'oranvo-small':
        return 'bef-bg-oranvo bef bef-d-flex jusCon-center aliIte-center   bef-r-5px bef-w-4_5rem bef-h-2rem bef-p-0_8rem';
      case 'rovo-small':
        return 'bef-bg-rovo bef bef-d-flex jusCon-center aliIte-center  bef-r-5px bef-w-4_5rem  bef-h-2rem bef-p-0_8rem';
      case 'rovo-large':
        return 'bef-bg-rovo bef bef-d-flex jusCon-center aliIte-center bef-w-8rem bef-r-5px  bef-h-2rem bef-p-0_8rem';
      default:
        return ``;
    }

  }

}
