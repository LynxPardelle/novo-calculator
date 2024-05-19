import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* Services */
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';
/*Modules*/
import { SharedModule } from './shared/shared.module';
/*components*/
import { IndexComponent } from './core/components/index/index.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    IndexComponent

  ],
  providers: [NgxBootstrapExpandedFeaturesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  public colors: { [key: string]: string } = {
    novo: '#001965',
    disk: '#939AA7',
    nord: '#E2F0FA',
    action: '#005AD2',
    novoError: '#D25A00',
  };
  public abreviationsValues: { [key: string]: string } = {
    fleStart: 'flex-start',
    fleEnd: 'flex-end',
    between: 'space-between',
    around: 'space-around',


  }

  public abreviationsClasses: { [key: string]: string } = {
    fleDir: 'bef-flexDirection',
    jusCon: 'bef-justifyContent',
    aliIte: 'bef-alignItems',
    fonWei: 'bef-fontWeight',
    texAli: 'bef-textAlign',




  }
  constructor(private readonly _bef: NgxBootstrapExpandedFeaturesService) {
    this._bef.pushColors(this.colors);
    this._bef.pushAbreviationsClasses(this.abreviationsClasses);
    this._bef.pushAbreviationsValues(this.abreviationsValues);


  }
  ngAfterViewInit(): void {
    this.cssCreate();
  }
  buttonClick(event: string): void {
    console.log('button clicked: ', event);
  }
  getButtonId(event: string): void {
    console.log('button id: ', event);
  }
  cssCreate() {
    this._bef.cssCreate();
  }
}
