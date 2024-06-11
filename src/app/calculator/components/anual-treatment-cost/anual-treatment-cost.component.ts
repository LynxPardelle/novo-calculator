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
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
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
  @Input() lifeStyleModification: number = 96080;
  @Input() liraglutideNLifeStyleModification: number = 141289;
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

  public multi: any[] = [
    {
      name: 'Modificación de estilo de vida',
      series: [
        {
          name: '',
          value: this.lifeStyleModification,
        },
      ],
    },
    {
      name: 'Liraglutida + modificación de estilo de vida',
      series: [
        {
          name: '',
          value: this.liraglutideNLifeStyleModification,
        },
      ],
    },
  ];
  public view: [number, number] = [350, 350];

  // options
  public showXAxis: boolean = true;
  public showYAxis: boolean = true;
  public gradient: boolean = true;
  public showLegend: boolean = false;
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
    domain: ['#001965', '#E2F0FA'],
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
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['lifeStyleModification'] &&
      changes['lifeStyleModification'].currentValue !==
        changes['lifeStyleModification'].previousValue
    ) {
      this.multi[0].series[0].value = this.lifeStyleModification;
      this.configYScaleMax();
    }
    if (
      changes['liraglutideNLifeStyleModification'] &&
      changes['liraglutideNLifeStyleModification'].currentValue !==
        changes['liraglutideNLifeStyleModification'].previousValue
    ) {
      this.multi[1].series[0].value = this.liraglutideNLifeStyleModification;
      this.configYScaleMax();
    }
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
      this.liraglutideNLifeStyleModification > this.lifeStyleModification
        ? this.liraglutideNLifeStyleModification
        : this.lifeStyleModification;
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
