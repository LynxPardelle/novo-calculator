import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  input,
} from '@angular/core';
/* Module */
/* Directives */
/* Libraries */
import {
  Color,
  LegendPosition,
  NgxChartsModule,
  ScaleType,
} from '@swimlane/ngx-charts';
import { SharedModule } from '../../../shared/shared.module';
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericSpanComponent } from '../../../shared/components/generic-span/generic-span.component';
import { TLifeStyleModifications } from '../../types/lifeStyleModifications';
@Component({
  selector: 'anual-treatment-cost',
  standalone: true,
  imports: [
    NgxChartsModule,
    SharedModule,
    GenericInputComponent,
    GenericSpanComponent,
  ],
  templateUrl: './anual-treatment-cost.component.html',
  styleUrl: './anual-treatment-cost.component.scss',
})
export class AnualTreatmentCostComponent implements OnChanges, OnInit {
  @Input() nutritionMonths: number = 0;
  @Input() infirmaryMonths: number = 0;
  @Input() physicalActivityMonths: number = 0;
  @Input() psychologyMonths: number = 0;
  @Input() nutritionUnitCost: number = 0;
  @Input() infirmaryUnitCost: number = 0;
  @Input() physicalActivityUnitCost: number = 0;
  @Input() psychologyUnitCost: number = 0;
  @Input() totalAnualCost: number = 45208.33;
  @Input() totalAnualCostPlusLiraglutide: number = 0;
  @Output() monthChange: EventEmitter<[number, TLifeStyleModifications]> =
    new EventEmitter<[number, TLifeStyleModifications]>();

  public multi: any[] = [];
  public view: [number, number] = [500, 500];

  // options
  public showXAxis: boolean = false;
  public showYAxis: boolean = true;
  public gradient: boolean = true;
  public showLegend: boolean = true;
  public legendPosition: LegendPosition = LegendPosition.Below;
  public showXAxisLabel: boolean = false;
  public xAxisLabel: string = 'Costo anual de tratamiento';
  public showYAxisLabel: boolean = false;
  public yAxisLabel: string = 'Costo';
  public legendTitle: string = '';
  public barPadding: number = 64;
  public showDataLabel: boolean = true;
  public yScaleMax: number = 200000;

  public colorScheme: string | Color = {
    name: 'novo',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#001965', '#005AD2'],
  };

  public tabs: {
    title: string;
    inputLable: string;
    spanNumber: number;
    type: TLifeStyleModifications;
  }[] = [];
  constructor() {}
  ngOnInit(): void {
    this.configYScaleMax();
    this.configTabs();
    this.configMulti();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['totalAnualCost'] &&
      changes['totalAnualCost'].currentValue !==
        changes['totalAnualCost'].previousValue
    ) {
      if (this.multi?.length > 0) {
        this.multi[0].value = this.totalAnualCost;
      }
      this.configYScaleMax();
      this.configMulti();
    }
    if (
      changes['totalAnualCostPlusLiraglutide'] &&
      changes['totalAnualCostPlusLiraglutide'].currentValue !==
        changes['totalAnualCostPlusLiraglutide'].previousValue
    ) {
      if (this.multi?.length > 0) {
        this.multi[1].value = this.totalAnualCostPlusLiraglutide;
      }
      this.configYScaleMax();
      this.configMulti();
    }
  }

  configMulti() {
    this.multi = [
      {
        name: 'Modificación de estilo de vida',
        value: this.totalAnualCost,
      },
      {
        name: 'Liraglutida + modificación de estilo de vida',
        value: this.totalAnualCostPlusLiraglutide,
      },
    ];
  }

  configTabs() {
    this.tabs = [
      {
        title: 'Nutrición',
        inputLable: 'Frecuencia Anual',
        spanNumber: this.nutritionUnitCost,
        type: 'nutrition',
      },
      {
        title: 'Enfermería',
        inputLable: 'Frecuencia Anual',
        spanNumber: this.infirmaryUnitCost,
        type: 'infirmary',
      },
      {
        title: 'Actividad física',
        inputLable: 'Frecuencia Anual',
        spanNumber: this.physicalActivityUnitCost,
        type: 'physicalActivity',
      },
      {
        title: 'Psicología',
        inputLable: 'Frencuencia Anual',
        spanNumber: this.psychologyUnitCost,
        type: 'psychology',
      },
    ];
  }

  configYScaleMax() {
    let max =
      this.totalAnualCostPlusLiraglutide > this.totalAnualCost
        ? this.totalAnualCostPlusLiraglutide
        : this.totalAnualCost;
    this.yScaleMax = Math.ceil(max / 20000) * 20000;
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

  selectedTab(event: any) {
    console.log(event);
  }

  monthInChange(event: string, type: TLifeStyleModifications) {
    console.log('event', event);
    console.log('typeof event', typeof event);
    let meses = parseInt(event);
    this.monthChange.emit([meses, type]);
  }
}
