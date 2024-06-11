import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
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
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
@Component({
  selector: 'archieve-goal-patients',
  standalone: true,
  imports: [NgxChartsModule, GenericInputComponent],
  templateUrl: './archieve-goal-patients.component.html',
  styleUrl: './archieve-goal-patients.component.scss',
})
export class ArchieveGoalPatientsComponent implements OnChanges, OnInit {
  @Input() lifeStyleModification: number = 5454615;
  @Input() liraglutideNLifeStyleModification: number = 1891406;
  @Input() treatmentGoalPercentage: 5 | 10 | 15 = 5;
  @Output() treatmentGoalPercentageChange: EventEmitter<5 | 10 | 15> =
    new EventEmitter<5 | 10 | 15>();

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

  constructor() {}
  ngOnInit(): void {
    this.configMulti();
    this.configYScaleMax();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['lifeStyleModification'] &&
        changes['lifeStyleModification'].currentValue !==
          changes['lifeStyleModification'].previousValue) ||
      (changes['liraglutideNLifeStyleModification'] &&
        changes['liraglutideNLifeStyleModification'].currentValue !==
          changes['liraglutideNLifeStyleModification'].previousValue)
    ) {
      this.configMulti();
      this.configYScaleMax();
    }


  }

  configMulti() {
    this.multi = [
      {
        name: 'Modificación de estilo de vida',
        value: this.lifeStyleModification,
      },
      {
        name: 'Liraglutida + modificación de estilo de vida',
        value: this.liraglutideNLifeStyleModification,
      },
    ];
    this.configYScaleMax();
  }

  configYScaleMax() {
    let max =
      this.liraglutideNLifeStyleModification > this.lifeStyleModification
        ? this.liraglutideNLifeStyleModification
        : this.lifeStyleModification;
    this.yScaleMax = Math.ceil(max / 500000) * 500000;
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
  selectTreatmentGoalPersentage(event: any) {

    this.treatmentGoalPercentage = parseInt(event.percentage) as 5 | 10 | 15;
    console.log('treatmentGoalPercentage', this.treatmentGoalPercentage);
    this.treatmentGoalPercentageChange.emit(this.treatmentGoalPercentage);

  }
}
