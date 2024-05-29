import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
/* Libraries */
import {
  Color,
  LegendPosition,
  NgxChartsModule,
  ScaleType,
} from '@swimlane/ngx-charts';
@Component({
  selector: 'liraglutide-and-lifestyle-modification',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './liraglutide-and-lifestyle-modification.component.html',
  styleUrl: './liraglutide-and-lifestyle-modification.component.scss',
})
export class LiraglutideAndLifestyleModificationComponent
  implements OnInit, OnChanges
{
  @Input() liraglutideAndLifeStyleModificationArchivesTheGoal: number = 2.15;
  @Input()
  liraglutideAndLifeStyleModificationDoesNotArchiveTheGoal: number = 12.85;
  @Input() lifeStyleModificationArchivesTheGoal: number = 1.7;
  @Input() lifeStyleModificationDoesNotArchiveTheGoal: number = 13.93;
  public liraglutideAndLifeStyleModificationResults: any[] = [
    {
      name: 'Logran la meta',
      value: this.liraglutideAndLifeStyleModificationArchivesTheGoal,
    },
    {
      name: 'No logran la meta',
      value: this.liraglutideAndLifeStyleModificationDoesNotArchiveTheGoal,
    },
  ];
  public lifeStyleModificationResults: any[] = [];
  public view: [number, number] = [300, 300];

  // options
  public gradient: boolean = true;
  public showLegend: boolean = true;
  public showLabels: boolean = true;
  public isDoughnut: boolean = false;
  public legendPosition: LegendPosition = LegendPosition.Below;

  public colorScheme: string | Color = {
    name: 'novo',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#c1ecdc', '#939AA7'],
  };

  constructor() {}
  ngOnInit(): void {
    this.configResults();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['lifeStyleModificationArchivesTheGoal'] &&
        changes['lifeStyleModificationArchivesTheGoal'].currentValue !==
          changes['lifeStyleModificationArchivesTheGoal'].previousValue) ||
      (changes['lifeStyleModificationDoesNotArchiveTheGoal'] &&
        changes['lifeStyleModificationDoesNotArchiveTheGoal'].currentValue !==
          changes['lifeStyleModificationDoesNotArchiveTheGoal']
            .previousValue) ||
      (changes['liraglutideAndLifeStyleModificationArchivesTheGoal'] &&
        changes['liraglutideAndLifeStyleModificationArchivesTheGoal']
          .currentValue !==
          changes['liraglutideAndLifeStyleModificationArchivesTheGoal']
            .previousValue) ||
      (changes['liraglutideAndLifeStyleModificationDoesNotArchiveTheGoal'] &&
        changes['liraglutideAndLifeStyleModificationDoesNotArchiveTheGoal']
          .currentValue !==
          changes['liraglutideAndLifeStyleModificationDoesNotArchiveTheGoal']
            .previousValue)
    ) {
      this.configResults();
    }
  }

  configResults(): void {
    this.lifeStyleModificationResults = [
      {
        name: 'Logran la meta',
        value: this.lifeStyleModificationArchivesTheGoal,
      },
      {
        name: 'No logran la meta',
        value: this.lifeStyleModificationDoesNotArchiveTheGoal,
      },
    ];
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
