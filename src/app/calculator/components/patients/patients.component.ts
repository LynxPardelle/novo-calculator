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
    /* Directives */
    ExistDirective,
  ],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent implements OnInit, OnChanges {
  results: TResult[] = [];
  view: [number, number] = [350, 300];

  // options
  legend: boolean = true;
  legendPosition: LegendPosition = LegendPosition.Below;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = '';
  yAxisLabel: string = 'Cost';
  timeline: boolean = true;

  colorScheme: string | Color = {
    name: 'novo',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#91bcac', '#D25A00'],
  };

  constructor(
    private _calculatorService: CalculatorService,
    private _bef: NgxBootstrapExpandedFeaturesService
  ) {
    effect(() => {
      this.configResults();
    });
  }

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
        name: patient.name,
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
