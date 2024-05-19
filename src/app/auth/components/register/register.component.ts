import { AfterViewInit, Component } from '@angular/core';
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [GenericInputComponent, GenericButtonComponent],
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
  constructor(private _bef: NgxBootstrapExpandedFeaturesService) {}

  ngAfterViewInit(): void {
    this.cssCreate();
  }

  getHtml(type: string) {
    switch (true) {
      case type === 'register':
        return ` <span class="bef bef-mx-7px aliIte-center">Registrarse </span>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
    `;
      default:
        return '';
    }
  }

  submit() {
    console.log('submit');
  }

  cssCreate() {
    this._bef.cssCreate();
  }
}
