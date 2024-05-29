import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
/* Modules */
import { SharedModule } from '../../../shared/shared.module';
/* Services */
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';
import { SharedService } from '../../../shared/services/shared.service';
/* Componentes */
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';
/* Pipes */
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    SharedModule,
    GenericInputComponent,
    GenericButtonComponent,
    SafeHtmlPipe,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements AfterViewInit {
  public registerForm: any = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    locked: true,
  };
  public spanClass: string =
    ' bef-d-block bef-w-50per bef-ms-1rem bef-color-rovo bef-mb-1rem';

  inputs = [
    {
      labelTitle: 'Escriba su nombre',
      type: 'text',
      placeholder: 'Escriba su nombre',
      thing: 'name',
      spans: [
        {
          text: 'Su nombre es requerido',
          evalThing: 'required',
          spanClass: this.spanClass,
        },
      ],
    },
    {
      labelTitle: 'Escriba su apellido',
      type: 'text',
      placeholder: 'Escriba su apellido',
      thing: 'lastName',
      spans: [
        {
          text: 'Su apellido es requerido',
          evalThing: 'required',
          spanClass: this.spanClass,
        },
      ],
    },
    {
      labelTitle: 'Escriba su correo',
      type: 'email',
      placeholder: 'Escriba su correo',
      thing: 'email',
      spans: [
        {
          text: 'Su email es requerido',
          evalThing: 'required',
          spanClass: this.spanClass,
        },
      ],
    },
    {
      labelTitle: 'Escriba su número de teléfono',
      type: 'tel',
      placeholder: 'Escriba su número de teléfono',
      thing: 'tel',
      spans: [
        {
          text: 'Su teléfono es requerido',
          evalThing: 'required',
          spanClass: this.spanClass,
        },
      ],
    },
    {
      labelTitle: 'Escriba su nombre de usuario',
      type: 'text',
      placeholder: 'Escriba su nombre de usuario',
      thing: 'username',
      spans: [
        {
          text: 'Su nombre de usuario es requerido',
          evalThing: 'required',
          spanClass: this.spanClass,
        },
      ],
    },
    {
      labelTitle: 'Escriba su contraseña',
      type: 'password',
      placeholder: 'Escriba su contraseña',
      thing: 'password',
      spans: [
        {
          text: 'Su contraseña es requerida',
          evalThing: 'required',
          spanClass: this.spanClass,
        },
      ],
    },
  ];

  constructor(
    private _bef: NgxBootstrapExpandedFeaturesService,
    private _router: Router,
    private _sharedService: SharedService
  ) {}

  whiteArrowRight = `<span class="bef bef-me-0_5rem bef-color-white">Registrarse</span> ${this._sharedService.getHtml(
    'whiteArrowRight'
  )}`;
  ArrowLeft = `${this._sharedService.getHtml('arrowLeft')}`;

  ngAfterViewInit(): void {
    this.cssCreate();
  }

  recoverChangesFromInput(event: any) {
    console.log('recoverChangesFromInput', event);
    this.registerForm = event;
    console.log('loginCredentials', this.registerForm);
  }

  submit() {
    console.log('submit');
    this._router.navigate(['/calculator']);
  }

  cssCreate() {
    this._bef.cssCreate();
  }
}
