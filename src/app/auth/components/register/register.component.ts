import { AfterViewInit, Component } from '@angular/core';
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';
import { SharedModule } from '../../../shared/shared.module';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [GenericInputComponent, GenericButtonComponent, SharedModule, SafeHtmlPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements AfterViewInit {
  inputs = [
    {
      labelTitle: 'Escriba su nombre',
      type: 'text',
      placeholder: 'Escriba su nombre',
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
  ArrowLeft = `${this._sharedService.getHtml('arrowLeft')} <a href="/" class="bef bef-textDecoration-none bef-color-novo bef-ms-1rem">Regresar</a>`;

  ngAfterViewInit(): void {
    this.cssCreate();
  }



  submit() {
    console.log('submit');
  }

  cssCreate() {
    this._bef.cssCreate();
  }
}
