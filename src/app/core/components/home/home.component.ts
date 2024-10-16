import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
/* Modules */
import { SharedModule } from '../../../shared/shared.module';
/* Services */
import { SharedService } from '../../../shared/services/shared.service';
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';
/* Components */
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';
/* Pipes */
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GenericButtonComponent, SharedModule, SafeHtmlPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  constructor(
    private _router: Router,
    private _sharedService: SharedService,
    private readonly _bef: NgxBootstrapExpandedFeaturesService
  ) {}

  ngAfterViewInit(): void {
    this.cssCreate();
  }

  whiteArrowRight = `<span class="bef bef-me-0_5rem">Iniciar sesión</span> ${this._sharedService.getHtml(
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
  cssCreate() {
    this._bef.cssCreate();
  }
}
