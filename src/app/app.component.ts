import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* Services */
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';
/*Modules*/
import { SharedModule } from './shared/shared.module';
/*components*/
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';
import { GenericButtonComponent } from './shared/components/generic-button/generic-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    ButtonComponent,
    InputComponent,
    GenericButtonComponent,
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
  constructor(private readonly _bef: NgxBootstrapExpandedFeaturesService) {
    this._bef.pushColors(this.colors);
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
