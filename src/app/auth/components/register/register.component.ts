import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
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
  inputs = [
    {
      labelTitle: 'Escriba su nombre',
      type: 'text',
      placeholder: 'Escriba su nombre',
      thing: 'name',
      spans: [],
    },
    {
      labelTitle: 'Escriba su apellido',
      type: 'text',
      placeholder: 'Escriba su apellido',
    },
    {
      labelTitle: 'Escriba su correo',
      type: 'email',
      placeholder: 'Escriba su correo',
    },
    {
      labelTitle: 'Escriba su número de teléfono',
      type: 'tel',
      placeholder: 'Escriba su número de teléfono',
    },
    {
      labelTitle: 'Escriba su nombre de usuario',
      type: 'text',
      placeholder: 'Escriba su nombre de usuario',
    },
    {
      labelTitle: 'Escriba su contraseña',
      type: 'password',
      placeholder: 'Escriba su contraseña',
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
  ArrowLeft = `${this._sharedService.getHtml(
    'arrowLeft'
  )} <a href="/" class="bef bef-textDecoration-none bef-color-novo bef-ms-1rem">Regresar</a>`;

  ngAfterViewInit(): void {
    this.cssCreate();
  }

  submit() {
    console.log('submit');
    this._router.navigate(['/calculator']);
  }

  cssCreate() {
    this._bef.cssCreate();
  }
}
