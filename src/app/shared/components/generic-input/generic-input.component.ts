import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'generic-input',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './generic-input.component.html',
  styleUrl: './generic-input.component.scss'
})
export class GenericInputComponent {
  @Input() lableName:string = '';
  @Input() typeName:string = '';
  @Input() placeHolderName:string = '';
}
