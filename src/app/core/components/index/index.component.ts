import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio Router


/* Modules */
import { SharedModule } from '../../../shared/shared.module';

/* Components */
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [GenericButtonComponent, SharedModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {
  constructor(private _router: Router) {} // Inyecta el servicio Router

  getHtml(type: string) {
    switch (true) {
      case type === 'login':
        return ` <span class="bef bef-mx-7px aliIte-center">Iniciar sesión </span>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
      `;
      case type === 'register':
        return ` <span>Registrarse</span> `;
      default:
        return '';
    }
  }

  goTo(place: string) {
    if (place === 'login') {
      this._router.navigate(['/login']); // Navega a la ruta '/login'
    } else if (place === 'register') {
      this._router.navigate(['/register']); // Navega a la ruta '/register'
    }
  }


}
