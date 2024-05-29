import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
/* Module */
/* Directives */
/* Libraries */
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
@Component({
  selector: 'anual-treatment-cost',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './anual-treatment-cost.component.html',
  styleUrl: './anual-treatment-cost.component.scss',
})
export class AnualTreatmentCostComponent implements OnChanges, OnInit {
  @Input() lifeStyleModification: number = 96080;
  @Input() liraglutideNLifeStyleModification: number = 141289;

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

  constructor() {}
  ngOnInit(): void {
    this.configYScaleMax();
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
}
