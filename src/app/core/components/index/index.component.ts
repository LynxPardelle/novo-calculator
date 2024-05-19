import { Component } from '@angular/core';
/* Components */
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [GenericButtonComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
