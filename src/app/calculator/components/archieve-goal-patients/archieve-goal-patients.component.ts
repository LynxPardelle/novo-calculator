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
      'bef-positionSEL__g__g__g__g-relative',
      'bef-strokeWidthSEL__g__g__g__g__path-2px',
      'bef-strokeLinejoinSEL__g__g__g__g__path-round',
      'bef-strokeCapjoinSEL__g__g__g__g__path-round',
      'bef-strokeDasharraySEL__g__g__g__gFirstChild__path-525__10',
      'bef-strokeDashoffsetSEL__g__g__g__gFirstChild__path-MIN5',
      'bef-strokeDasharraySEL__g__g__g__gLastChild__path-267_5__10',
      'bef-strokeDashoffsetSEL__g__g__g__gLastChild__path-MIN5',
      'bef-strokeSEL__g__g__g__gLastChild__path-doranvo',
      'bef-strokeSEL__g__g__g__gFirstChild__path-novo',
      'bef-positionSEL__g__g__g__gAfter-absolute',
      'bef-widthSEL__g__g__g__gAfter-100per',
      'bef-heightSEL__g__g__g__gAfter-100per',
      'bef-contentSEL__g__g__g__gAfter-CDB__CDB',
      'bef-startSEL__g__g__g__gAfter-0px',
      'bef-topSEL__g__g__g__gAfter-0px',
      'bef-displaySEL__g__g__g__gAfter-block',
      'bef-borderSEL__g__g__g__gLastChildAfter-3px__solid__doranvo',
    ],
  };

  public multi: any[] = [];
  public view: [number, number] = [500, 500];

  // options
  public showXAxis: boolean = false;
  public showYAxis: boolean = true;
  public gradient: boolean = false;
  public showLegend: boolean = false;
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
  public person = this._sharedService.getHtml('person10');
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
    this.yScaleMax = (Math.ceil(max / 500000) + 1) * 500000;
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
