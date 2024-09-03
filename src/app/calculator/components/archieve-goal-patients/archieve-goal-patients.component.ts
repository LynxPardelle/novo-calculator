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
  ColorHelper,
  LegendPosition,
  NgxChartsModule,
  ScaleType,
} from '@swimlane/ngx-charts';
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { SharedService } from '../../../shared/services/shared.service';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';

@Component({
  selector: 'archieve-goal-patients',
  standalone: true,
  imports: [NgxChartsModule, GenericInputComponent, SafeHtmlPipe],
  templateUrl: './archieve-goal-patients.component.html',
  styleUrl: './archieve-goal-patients.component.scss',
})
export class ArchieveGoalPatientsComponent implements OnChanges, OnInit {
  @Input() lifeStyleModification: number = 5454615;
  @Input() liraglutideNLifeStyleModification: number = 1891406;

  public barCombo = {
    bars: [
      /*
      'bef-fillSEL__g__g__g__gLastChild__path-HASHEBAC1F',
      'bef-fillSEL__g__g__g__gFirstChild__path-HASH4096D3',
      */
      'bef-widthSEL__g__g__g__gLastChildBefore-100px',
      'bef-heightSEL__g__g__g__gLastChildBefore-100px',
      'bef-bgSEL__g__g__g__gLastChildBefore-red',
      'bef-contentSEL__g__g__g__gLastChildBefore-CDB__CDB',
      'bef-startSEL__g__g__g__gLastChildBefore-0',
      'bef-topSEL__g__g__g__gLastChildBefore-0',
      'bef-displaySEL__g__g__g__gLastChildBefore-block',
      'bef-positionSEL__g__g__g__gLastChildBefore-absolute',
    ],
  };

  public multi: any[] = [];
  public view: [number, number] = [500, 500];

  // options
  public showXAxis: boolean = false;
  public showYAxis: boolean = true;
  public gradient: boolean = false;
  public showLegend: boolean = true;
  public legendPosition: LegendPosition = LegendPosition.Below;
  public showXAxisLabel: boolean = false;
  public xAxisLabel: string = 'Costo anual de tratamiento';
  public showYAxisLabel: boolean = false;
  public yAxisLabel: string = 'Costo';
  public legendTitle: string = '';
  public barPadding: number = 128;
  public showDataLabel: boolean = true;
  public yScaleMax: number = 200000;
  public roundEdges: boolean = false;

  public colorScheme: string | Color = {
    name: 'novo',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#4096D3', '#EBAC1F'],
  };

  constructor(
    private _sharedService: SharedService,
    private _bef: NgxBootstrapExpandedFeaturesService
  ) {
    this._bef.pushCombos(this.barCombo);
  }
  public person = this._sharedService.getHtml('person6');
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
}
