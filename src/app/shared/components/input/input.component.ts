import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
@Input() lableName:string = '';
@Input() typeName:string = '';
@Input() placeHolderName:string = '';
}
