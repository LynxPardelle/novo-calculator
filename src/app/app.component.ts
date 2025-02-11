import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* Services */
import {
  NgxBootstrapExpandedFeaturesService,
  TBPS,
} from 'ngx-bootstrap-expanded-features';
/*Modules*/
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  providers: [NgxBootstrapExpandedFeaturesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  public colors: { [key: string]: string } = {
    novo: '#001965',
    sky: '#4096D3',
    disk: '#939AA7',
    diskSoft: '#d1d3d8',
    nord: '#E2F0FA',
    accentNord: '#c1ecdc',
    action: '#005AD2',
    suvo: '#5AD200',
    rovo: '#921A00',
    oranvo: '#f27A00',
    doranvo: '#E8563F',
    yell: '#EBAC1F',
  };
  public abreviationsValues: { [key: string]: string } = {
    fleStart: 'flex-start',
    fleEnd: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
  };

  public abreviationsClasses: { [key: string]: string } = {
    fleDir: 'bef-flexDirection',
    jusCon: 'bef-justifyContent',
    jusSel: 'bef-justifySelf',
    aliIte: 'bef-alignItems',
    aliSel: 'bef-alignSelf',
    fonWei: 'bef-fontWeight',
    texAli: 'bef-textAlign',
    wrap: 'bef-flexWrap',
    worBre: 'bef-wordBreak',
    textTra: 'bef-textTransform',
    shrink: 'bef-flexShrink',
    objFit: 'bef-objectFit',
  };

  public breakpoints: TBPS[] = [
    {
      bp: 'mini',
      value: '1px) and (max-width: 1025px',
    },
    {
      bp: 'air',
      value: '1026px',
    },
  ];

  constructor(private readonly _bef: NgxBootstrapExpandedFeaturesService) {
    this._bef.pushColors(this.colors);
    this._bef.pushAbreviationsClasses(this.abreviationsClasses);
    this._bef.pushAbreviationsValues(this.abreviationsValues);
    this._bef.pushBPS(this.breakpoints);
    // this._bef.changeDebugOption(true);
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.cssCreate();
    }, 1000);
  }

  getButtonId(event: string): void {
    console.log('button id: ', event);
  }
  cssCreate() {
    this._bef.cssCreate();
  }
}
