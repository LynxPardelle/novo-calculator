import { Component, EventEmitter, Input, Output } from '@angular/core';
/* Services */
import { SharedService } from '../../../shared/services/shared.service';
/* Components */
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericSpanComponent } from '../../../shared/components/generic-span/generic-span.component';
/* Pipes */
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
/*Types */
import { TSemanas } from '../../types/semanas.type';
import { TInstitution } from '../../types/institution.type';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'treatment-cost',
  standalone: true,
  imports: [GenericSpanComponent, SafeHtmlPipe, GenericInputComponent, CurrencyPipe],
  templateUrl: './treatment-cost.component.html',
  styleUrl: './treatment-cost.component.scss',
})
export class TreatmentCostComponent {
  @Input() institution: TInstitution = 'public';
  @Input() unitCost: number = 2325;
  @Input() anualCost: number = 45208.33;
  public filledClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-bcb-oranvo  bef-rt-5px bef-bg-white bef-ms-1rem bef-wmn-5rem bef-w-80per bef-wmx-10rem bef-h-2_5rem bef-p-0_5rem';
  public emptyClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-bcb-oranvo  bef-rt-5px bef-bg-white bef-ms-1rem bef-wmn-5rem bef-w-80per bef-wmx-10rem bef-h-2_5rem bef-p-0_5rem';
  public thermo1: string = this._sharedService.getHtml('thermo1');
  public thermo2: string = this._sharedService.getHtml('thermo2');
  public arrowRight = this._sharedService.getHtml('arrowRight');
  public person = this._sharedService.getHtml('person4');
  public treatmentTitles: { title: string; description: string }[] = [
    {
      title: 'Alternativa:',
      description: 'Liraglutida',
    },
    {
      title: 'Presentación:',
      description:
        `Caja de cartón con 3 plumas precargadas
        con 3 ml (6 mg/ml) Clave CNIS:7125.00`,
    },
  ];
  @Output() unitCostChange: EventEmitter<number> = new EventEmitter<number>();
  constructor(private _sharedService: SharedService) {

  }
  semanas: TSemanas[] = [
    {
      semana: 'Semana 1:',
      dosis: ' ' + '0.6 mg al día',
      color: 'oranvo',
      size: 'small',
      cost: 181
    },
    {
      semana: 'Semana 2:',
      dosis: ' ' + '1.2 mg al día',
      color: 'oranvo',
      size: 'small',
      cost: 362
    },
    {
      semana: 'Semana 3:',
      dosis: ' ' + '1.8 mg al día',
      color: 'oranvo',
      size: 'small',
      cost: 543
    },
    {
      semana: 'Semana 4:',
      dosis: ' ' + '2.4 mg al día',
      color: 'oranvo',
      size: 'small',
      cost: 724
    },
    {
      semana: 'Semana 5+:',
      dosis: ' ' + '3.0 mg al día',
      color: 'rovo',
      size: 'small',
      cost: 904
    },
    {
      mantenimiento: '48 semanas en dosis de mantenimiento',
      color: 'rovo',
      size: 'large',
    },
  ];

  getClasses(color: string, size?: string) {
    switch (`${color}-${size}`) {
      case 'oranvo-small':
        return 'bef-bg-oranvo bef bef-d-flex jusCon-center aliIte-center   bef-rt-5px bef-w-4_4rem bef-h-2rem bef-p-0_8rem';
      case 'rovo-small':
        return 'bef-bg-rovo bef bef-d-flex jusCon-center aliIte-center  bef-rt-5px bef-w-4_4rem  bef-h-2rem bef-p-0_8rem';
      case 'rovo-large':
        return 'bef-bg-rovo bef bef-d-flex jusCon-center aliIte-center bef-w-7rem bef-r-5px  bef-h-2rem bef-p-0_8rem';
      default:
        return ``;
    }
  }
}
