import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  Color,
  LegendPosition,
  NgxChartsModule,
  ScaleType,
} from '@swimlane/ngx-charts';

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
  imports: [NgxChartsModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent implements OnInit, OnChanges {
  @Input() patients: TPatients[] = [
    {
      name: 'Pacientes con DM2',
      liraglutideNLifeStyleModification: [
        82, 139, 179, 209, 230, 245, 256, 264, 269,
      ],
      lifeStyleModification: [89, 154, 201, 236, 262, 282, 296, 306, 314],
    },
    {
      name: 'Pacientes con enfermedad coronaria',
      liraglutideNLifeStyleModification: [
        245, 423, 554, 650, 720, 772, 810, 838, 859,
      ],
      lifeStyleModification: [251, 436, 573, 675, 750, 806, 847, 877, 900],
    },
    {
      name: 'Pacientes con accidente cerebrovascular',
      liraglutideNLifeStyleModification: [
        113, 196, 257, 302, 335, 360, 378, 392, 401,
      ],
      lifeStyleModification: [114, 199, 261, 308, 342, 367, 386, 400, 411],
    },
  ];
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

  constructor() {}
  ngOnInit(): void {
    this.configResults();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['patients'] &&
      changes['patients'].currentValue !== changes['patients'].previousValue
    ) {
      this.configResults();
    }
  }

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
}
