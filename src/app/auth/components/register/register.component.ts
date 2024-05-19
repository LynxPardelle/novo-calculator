import { Component } from '@angular/core';
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [GenericInputComponent, GenericButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  inputs = [
    {
      lableName: 'Escriba su nombre',
      typeName: 'text',
      placeHolderName: 'Escriba su nombre',
    },
    {
      lableName: 'Escriba su apellido',
      typeName: 'text',
      placeHolderName: 'Escriba su apellido',
    },
    {
      lableName: 'Escriba su correo',
      typeName: 'email',
      placeHolderName: 'Escriba su correo',
    },
    {
      lableName: 'Escriba su número de teléfono',
      typeName: 'tel',
      placeHolderName: 'Escriba su número de teléfono',
    },
    {
      lableName: 'Escriba su nombre de usuario',
      typeName: 'text',
      placeHolderName: 'Escriba su nombre de usuario',
    },
    {
      lableName: 'Escriba su contraseña',
      typeName: 'password',
      placeHolderName: 'Escriba su contraseña',
    },
  ];

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
    console.log('submit')
  }
}
