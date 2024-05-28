import { Component } from '@angular/core';
import { Router } from '@angular/router';
/* Modules */
import { SharedModule } from '../../../shared/shared.module';
/* Services */
import { SharedService } from '../../../shared/services/shared.service';
/* Componentes */
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';
/* Pipes */
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

export type TLoginCredentials = {
  email: string;
  password: string;
  institution: 'private' | 'public' | '';
  locked: boolean;
};
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    GenericInputComponent,
    GenericButtonComponent,
    SharedModule,
    SafeHtmlPipe,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public loginCredentials: TLoginCredentials = {
    email: '',
    password: '',
    institution: '',
    locked: true,
  };
  public containerClasses: string = 'bef bef-w-100per bef-h-6rem';
  public spanClass: string = ' bef-d-block bef-color-novoError bef-mb-1rem';
  constructor(private _router: Router, private _sharedService: SharedService) {}

  logo = this._sharedService.getHtml('logo');
  arrowRight = `<span class="bef bef-me-0_5rem">Iniciar sesión</span> ${this._sharedService.getHtml(
    'whiteArrowRight'
  )}`;

  submit() {
    if (!this.loginCredentials.locked) {
      console.log('submit');
      this._router.navigate(['/calculator']);
    } else {
      console.log('submit locked');
      this._router.navigate(['/calculator']);
    }
  }

  recoverChangesFromInput(event: any) {
    console.log('recoverChangesFromInput', event);
    this.loginCredentials = event;
    console.log('loginCredentials', this.loginCredentials);
  }
}
