import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { SharedService } from '../../../shared/services/shared.service';
import { GenericSpanComponent } from '../../../shared/components/generic-span/generic-span.component';
import { TComorbidities } from '../../types/comorbidities.type';
import { MathPipe } from '../../../shared/pipes/math.pipe';
import { CurrencyPipe } from '@angular/common';
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';

@Component({
  selector: 'comorbidities',
  standalone: true,
  imports: [
    GenericInputComponent,
    GenericButtonComponent,
    GenericSpanComponent,
    SafeHtmlPipe,
    MathPipe,
    CurrencyPipe,
  ],
  templateUrl: './comorbidities.component.html',
  styleUrl: './comorbidities.component.scss',
})
export class ComorbiditiesComponent implements AfterViewInit {
  public trueClasses: string =
    'bef bef-ptSEL__div-0_5rem bef-bg-novo bef-bw-0 bef-w-4rem bef-h-4rem bef-color-white bef-mx-0_5rem bef-p-0_5rem bef-bw-3px bef-bs-solid bef-bc-novo bef-d-flex jusCon-center aliItem-center';
  public falseClasses: string =
    'bef bef-ptSEL__div-0_5rem bef-bg-white bef-color-HASHCBCFD5 bef-fillSEL__path-HASHCBCFD5 bef-bw-3px bef-bs-solid bef-bc-novo__OPA__0_24 bef-w-4rem bef-h-4rem bef-mx-0_5rem bef-p-0_5rem bef-d-flex jusCon-center aliItem-center';
  public trueColors: string =
    'bef bef-bg-novo bef-fontWeight-700 bef-bw-0 bef-w-auto bef-color-white bef-h-5rem';
  public falseColors: string =
    'bef bef-d-flex bef-fontWeight-700  bef-bg-HASHf5fafa bef-bw-0 bef-w-auto bef-color-disk bef-h-5rem';
  public filledClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center  bef-bsb-solid bef-bcb-novo bef-bwb-3px bef-fontWeight-700 bef-rt-0_5px bef-bg-rgbaSD184COM__201COM__214COM__0_2ED   bef-h-2_5rem bef  bef-p-0_5rem';
  public emptyClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center  bef-bsb-solid bef-bcb-novo bef-bwb-3px bef-fontWeight-700 bef-rt-0_5px bef-bg-rgbaSD184COM__201COM__214COM__0_2ED   bef-h-2_5rem bef  bef-p-0_5rem';

  public thumbsUp = this.sharedService.getHtml('arriba');
  public thumbsDown = this.sharedService.getHtml('abajo');
  public hipertension = this.sharedService.getHtml('hipertension');
  public dislipidemia = this.sharedService.getHtml('dislipidemia');
  public prediabetes = this.sharedService.getHtml('prediabetes');
  public arrowRight = this.sharedService.getHtml('arrowRight');
  public bascula = this.sharedService.getHtml('bascula');

  @Input() needsComorbidities: boolean = false;

  @Input() comorbidities: TComorbidities = {
    hipertensión: false,
    dislipidemia: false,
    prediabetes: false,
  };

  public comorbiditiesName: string[] = [
    'hipertensión',
    'dislipidemia',
    'prediabetes',
  ];

  @Input() comorbiditiesText: string = '';

  @Input() comorbiditiesPatientsPercentage: number = 0;
  @Input() comorbiditiesPatients: number = 0;
  @Input() populationTotal: number = 0;
  @Output() needsComorbiditiesChange: EventEmitter<boolean> =
    new EventEmitter();
  @Output() comorbiditiesChange: EventEmitter<TComorbidities> =
    new EventEmitter();

  constructor(
    private sharedService: SharedService,
    private _bef: NgxBootstrapExpandedFeaturesService
  ) {}
  ngAfterViewInit(): void {
    this.cssCreate();
  }
  cssCreate() {
    this._bef.cssCreate();
  }
}
