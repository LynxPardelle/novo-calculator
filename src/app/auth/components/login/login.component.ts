import { Component } from '@angular/core';
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { SharedService } from '../../../shared/services/shared.service';
import { SharedModule } from '../../../shared/shared.module';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';

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
  constructor(private _sharedService: SharedService) {}

  logo = this._sharedService.getHtml('logo');
  arrowRight = `<span class="bef bef-me-0_5rem">Iniciar sesión</span> ${this._sharedService.getHtml(
    'whiteArrowRight'
  )}`;

  submit() {
    console.log('submit');
  }
}
