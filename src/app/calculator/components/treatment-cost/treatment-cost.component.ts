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
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-bwb-3px bef-bcb-yell bef-rt-0_5px bef-bg-white bef-ms-1rem bef-wmn-5rem bef-w-80per bef-wmx-10rem bef-h-2_7rem bef-p-0_5rem';
  public emptyClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-bwb-3px bef-bcb-yell bef-rt-0_5px bef-bg-white bef-ms-1rem bef-wmn-5rem bef-w-80per bef-wmx-10rem bef-h-2_7rem bef-p-0_5rem';
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
      color: 'novo',
      size: 'small',
      cost: 181
    },
    {
      semana: 'Semana 2:',
      dosis: ' ' + '1.2 mg al día',
      color: 'novo',
      size: 'small',
      cost: 362
    },
    {
      semana: 'Semana 3:',
      dosis: ' ' + '1.8 mg al día',
      color: 'novo',
      size: 'small',
      cost: 543
    },
    {
      semana: 'Semana 4:',
      dosis: ' ' + '2.4 mg al día',
      color: 'novo',
      size: 'small',
      cost: 724
    },


  ];

  arrow: string = this._sharedService.getHtml('poligonArrow')



}
