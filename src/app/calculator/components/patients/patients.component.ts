import {
  Component,
  effect,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
/* Modules */
import { SharedModule } from '../../../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
/* Services */
import { CalculatorService } from '../../services/calculator.service';
/* Components */
import { GenericPeopleChartComponent } from '../../../shared/components/generic-people-chart/generic-people-chart.component';
/* Libraries */
import {
  Color,
  LegendPosition,
  NgxChartsModule,
  ScaleType,
} from '@swimlane/ngx-charts';
import { ExistDirective } from '../../../shared/directives/exists.directive';
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { SharedService } from '../../../shared/services/shared.service';
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { TDropDownOption } from '../../../shared/types/dropDownOption.type';
import { MathPipe } from '../../../shared/pipes/math.pipe';

export type TPatients = {
  name: string;
  liraglutideNLifeStyleModification: number[];
  lifeStyleModification: number[];
};
export type TResult = {
  name: string;
  chart: { name: string; series: { name: string; value: string }[] }[];
};

@Component({
  selector: 'patients',
  standalone: true,
  imports: [
    NgxChartsModule,
    SharedModule,
    MatTabsModule,
    /* Components */
    GenericPeopleChartComponent,
    GenericInputComponent,
    /* Directives */
    ExistDirective,
    /* Pipes */
    SafeHtmlPipe,
    MathPipe,
  ],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent implements OnInit, OnChanges {
  public results: TResult[] = [];
  public view: [number, number] = [275, 275];

  // options
  legend: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;
  legendTitle: string = '';
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Years';
  yAxisLabel: string = 'Cost';
  timeline: boolean = true;

  colorScheme: string | Color = {
    name: 'novo',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#001965', '#D25A00'],
  };

  public year: string = '1';
  public chosenYear: number = 1;
  /* CreateArray of number from 1 to 10 */
  public yearOptions: TDropDownOption[] = [...Array(10).keys()].map((value) => {
    return {
      type: 'option',
      option: `${(value + 1).toString()} año${value >= 1 ? 's' : ''}`,
      click: (value + 1).toString(),
      customClasses:
        'bef bef-fs-14px texAli-center bef-mxSEL__span-auto bef-minHeight-14px',
    };
  });

  constructor(
    private _calculatorService: CalculatorService,
    private _bef: NgxBootstrapExpandedFeaturesService,
    private _sharedService: SharedService
  ) {
    effect(() => {
      this.configResults();
    });
  }
  public person = this._sharedService.getHtml('person9');
  public fatChart1 = this._sharedService.getHtml('fatChart1');
  public fatChart2 = this._sharedService.getHtml('fatChart2');
  public dm2 = this._sharedService.getHtml('dm2');
  public hearPatients = this._sharedService.getHtml('hearPatients');
  public brain = this._sharedService.getHtml('brain');

  get patients() {
    return this._calculatorService.patients$();
  }
  ngOnInit(): void {
    this.configResults();
    this.cssCreate();
  }
  ngOnChanges(changes: SimpleChanges): void {}

  configResults(): void {
    this.results = this.patients.map((patient) => {
      return {
        name: patient.name.replace('Pacientes con', ''),
        chart: [
          {
            name: 'Liraglutida + modificación de estilo de vida',
            series: patient.liraglutideNLifeStyleModification.map(
              (value, index) => {
                return { name: index.toString(), value: value.toString() };
              }
            ),
          },
          {
            name: 'Modificación de estilo de vida',
            series: patient.lifeStyleModification.map((value, index) => {
              return { name: index.toString(), value: value.toString() };
            }),
          },
        ],
      };
    });
  }

  setYear(year: string): void {
    this.year = year;
    this.chosenYear = parseInt(year);
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  cssCreate() {
    this._bef.cssCreate();
  }
}
