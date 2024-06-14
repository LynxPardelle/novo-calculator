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
import { MathPipe } from '../../../shared/pipes/math.pipe';
import { SharedService } from '../../../shared/services/shared.service';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
@Component({
  selector: 'liraglutide-and-lifestyle-modification',
  standalone: true,
  imports: [NgxChartsModule, MathPipe, SafeHtmlPipe],
  templateUrl: './liraglutide-and-lifestyle-modification.component.html',
  styleUrl: './liraglutide-and-lifestyle-modification.component.scss',
})
export class LiraglutideAndLifestyleModificationComponent
  implements OnInit, OnChanges
{
  @Input() times: number = 4.1;
  @Input() archieveGoalWithLiraglutide: number = 2.15;
  @Input()
  dontArchiveGoalWithLiraglutide: number = 12.85;
  @Input() archieveGoal: number = 1.7;
  @Input() dontArchiveGoal: number = 13.93;
  public liraglutideAndLifeStyleModificationResults: any[] = [];
  public lifeStyleModificationResults: any[] = [];
  public view: [number, number] = [300, 300];

  // options
  public gradient: boolean = true;
  public showLegend: boolean = true;
  public legendTitle: string = '';
  public showLabels: boolean = false;
  public isDoughnut: boolean = false;
  public legendPosition: LegendPosition = LegendPosition.Below;

  public colorScheme: string | Color = {
    name: 'novo',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#c1ecdc', '#939AA7'],
  };

  constructor(private _sharedService: SharedService) {}
  public person = this._sharedService.getHtml('person7');
  ngOnInit(): void {
    this.configResults();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['archieveGoal'] &&
        changes['archieveGoal'].currentValue !==
          changes['archieveGoal'].previousValue) ||
      (changes['dontArchiveGoal'] &&
        changes['dontArchiveGoal'].currentValue !==
          changes['dontArchiveGoal'].previousValue) ||
      (changes['archieveGoalWithLiraglutide'] &&
        changes['archieveGoalWithLiraglutide'].currentValue !==
          changes['archieveGoalWithLiraglutide'].previousValue) ||
      (changes['dontArchiveGoalWithLiraglutide'] &&
        changes['dontArchiveGoalWithLiraglutide'].currentValue !==
          changes['dontArchiveGoalWithLiraglutide'].previousValue)
    ) {
      this.configResults();
    }
  }

  configResults(): void {
    this.lifeStyleModificationResults = [
      {
        name: 'Logran la meta',
        value: this.archieveGoal,
      },
      {
        name: 'No logran la meta',
        value: this.dontArchiveGoal,
      },
    ];
    this.liraglutideAndLifeStyleModificationResults = [
      {
        name: 'Logran la meta',
        value: this.archieveGoalWithLiraglutide,
      },
      {
        name: 'No logran la meta',
        value: this.dontArchiveGoalWithLiraglutide,
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
