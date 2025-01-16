import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
/* Modules */
import { SharedModule } from '../../../shared/shared.module';
/* Types */
import { TConsoleMessage, TInputLoginOptions, TLoginCredentials } from '../../../auth/components/login/login.component';
import { TInstitution } from '../../../calculator/types/institution.type';
/* Services */
import { SharedService } from '../../../shared/services/shared.service';
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';
import { CalculatorService } from '../../../calculator/services/calculator.service';
/* Components */
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
/* Directives */
import { ExistDirective } from '../../../shared/directives/exists.directive';
/* Pipes */
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GenericButtonComponent, GenericInputComponent, SharedModule, SafeHtmlPipe, ExistDirective, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  public loginCredentials: { institution: TInstitution, locked: boolean } = {
    institution: '' as TInstitution,
    locked: true,
  };
  public lockeds: { institution: boolean } = {
    institution: true,
  };
  public containerClasses: string = 'bef bef-w-450px bef-mxw-50vw bef-h-5rem';
  public spanClass: string = ' bef-d-block bef-color-rovo bef-mb-1rem';
  public consoleMessage: TConsoleMessage = {};
  public arrowRight = `<span class="bef bef-me-0_5rem">Comenzar</span> ${this._sharedService.getHtml(
    'whiteArrowRight'
  )}`;
  constructor(
    private _router: Router,
    private _sharedService: SharedService,
    private readonly _bef: NgxBootstrapExpandedFeaturesService,
    private _calculatorService: CalculatorService
  ) { }
  get calculatorData() {
    return this._calculatorService.calculatorData$();
  }

  ngAfterViewInit(): void {
    this.cssCreate();
  }

  whiteArrowRight = `<span class="bef bef-me-0_5rem">Comenzar</span> ${this._sharedService.getHtml(
    'whiteArrowRight'
  )}`;
  logo = this._sharedService.getHtml('logo');

  goTo(place: string) {
    if (place === 'login') {
      this._router.navigate(['/login']); // Navega a la ruta '/login'
    } else if (place === 'register') {
      this._router.navigate(['/register']); // Navega a la ruta '/register'
    }
  }

  submit() {
    try {
      if (this.loginCredentials.locked) {
        throw new Error('Por favor, llene los campos requeridos.');
      }
      this.calculatorData.institution = this.loginCredentials.institution;
      this._calculatorService.calculatorData$.set(
        JSON.parse(JSON.stringify(this.calculatorData))
      );
      this._router.navigate(['/calculator']);
    } catch (error: unknown) {
      console.log('error', error);
      let errorMessage =
        error instanceof Error ? error.message : 'Error desconocido';
      this.consoleMessage = {
        message: 'Error al iniciar sesión: ' + errorMessage,
        type: 'error',
      };
    }
  }

  recoverChangesFromInput(event: any, input: TInputLoginOptions) {
    console.log('recoverChangesFromInput', event);
    let { credentials, locked } = event;
    this.loginCredentials = {
      ...this.loginCredentials,
      ...credentials,
    };
    switch (input) {
      case 'institution':
        this.lockeds.institution = locked;
        this.consoleMessage = {};
        break;
    }
    this.loginCredentials.locked = Object.values(this.lockeds).some((l) => l);
    console.log('loginCredentials', this.loginCredentials);
  }

  cssCreate() {
    this._bef.cssCreate();
  }
}
