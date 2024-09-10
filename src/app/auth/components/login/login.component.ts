import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
/* Modules */
import { SharedModule } from '../../../shared/shared.module';
/* Services */
import { SharedService } from '../../../shared/services/shared.service';
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';
/* Componentes */
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';
/* Directives */
import { ExistDirective } from '../../../shared/directives/exists.directive';
/* Pipes */
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { CalculatorService } from '../../../calculator/services/calculator.service';
import { TInstitution } from '../../../calculator/types/institution.type';

export type TLoginCredentials = {
  email: string;
  password: string;
  institution: TInstitution;
  locked: boolean;
};
export type TLocks = {
  email: boolean;
  password: boolean;
  institution: boolean;
};

export type TInputLoginOptions = 'email' | 'password' | 'institution';

export type TConsoleMessage = {
  message?: string;
  type?: 'error' | 'success' | 'warning' | 'info';
};
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    GenericInputComponent,
    GenericButtonComponent,
    SharedModule,
    ExistDirective,
    SafeHtmlPipe,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public loginCredentials: TLoginCredentials = {
    email: '',
    password: '',
    institution: 'public',
    locked: true,
  };
  public lockeds: TLocks = {
    email: true,
    password: true,
    institution: true,
  };
  public containerClasses: string = 'bef bef-w-100per bef-h-6rem';
  public spanClass: string = ' bef-d-block bef-color-rovo bef-mb-1rem';
  public consoleMessage: TConsoleMessage = {};
  public logo = this._sharedService.getHtml('logo');
  public arrowRight = `<span class="bef bef-me-0_5rem">Iniciar sesión</span> ${this._sharedService.getHtml(
    'whiteArrowRight'
  )}`;
  constructor(
    private _router: Router,
    private _sharedService: SharedService,
    private _bef: NgxBootstrapExpandedFeaturesService,
    private _calculatorService: CalculatorService
  ) {}
  get calculatorData() {
    return this._calculatorService.calculatorData$();
  }

  ngOnInit(): void {
    this.cssCreate();
  }

  submit() {
    try {
      if (this.loginCredentials.locked)
        throw new Error('Por favor, llene los campos requeridos.');
      if (
        this.loginCredentials.email === 'demo' &&
        this.loginCredentials.password === 'test1'
      ) {
        this.calculatorData.institution = this.loginCredentials.institution;
        this._calculatorService.calculatorData$.set(
          JSON.parse(JSON.stringify(this.calculatorData))
        );
        this._router.navigate(['/calculator']);
      }
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
      case 'email':
        this.lockeds.email = locked;
        break;
      case 'password':
        this.lockeds.password = locked;
        break;
      case 'institution':
        this.lockeds.institution = locked;
        break;
    }
    this.loginCredentials.locked = Object.values(this.lockeds).some((l) => l);
    console.log('loginCredentials', this.loginCredentials);
  }

  cssCreate() {
    this._bef.cssCreate();
  }
}
