import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'generic-span',
  standalone: true,
  imports: [],
  templateUrl: './generic-span.component.html',
  styleUrl: './generic-span.component.scss'
})
export class GenericSpanComponent {
@Input() info: string | number = 3049582;
@Input() emptyClasses: string = '';
@Input() filledClasses: string = '';
@Input() textClasses: string = '';
@Input() bubbleInfo: { [key: string]: string | number } = {info: 3049582}
@Output() hoverEvent = new EventEmitter();

onHover() {
  this.hoverEvent.emit(this.bubbleInfo);
}


}
