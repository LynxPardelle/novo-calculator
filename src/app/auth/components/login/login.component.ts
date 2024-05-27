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
  constructor(private _router: Router, private _sharedService: SharedService) {}

  logo = this._sharedService.getHtml('logo');
  arrowRight = `<span class="bef bef-me-0_5rem">Iniciar sesión</span> ${this._sharedService.getHtml(
    'whiteArrowRight'
  )}`;

  submit() {
    console.log('submit');
    this._router.navigate(['/calculator']);
  }
}
