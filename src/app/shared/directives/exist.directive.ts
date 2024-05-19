import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[exist]',
  standalone: true,
})
export class ExistDirective implements OnInit {
  @Input() exist!: boolean;
  @Output('exist') initEvent: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.exist) {
      setTimeout(() => this.initEvent.emit(), 10);
    }
  }
}
