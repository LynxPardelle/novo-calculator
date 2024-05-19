import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
/* Services */
import { SharedService } from '../../services/shared.service';
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';
/* Pipes */
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';
@Component({
  selector: 'generic-button',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './generic-button.component.html',
  styleUrl: './generic-button.component.scss',
})
export class GenericButtonComponent implements OnInit {
  @Input() buttonId: string = '';
  @Input() buttonInner: string = '';
  @Input() buttonBGColor: string = '';
  @Input() buttonTextColor: string = '';
  @Input() buttonClass: string = '';
  @Input() buttonDisabledClass: string = '';
  @Input() buttonType: 'rounded' | 'squared' = 'rounded';
  @Input() disabled: boolean = false;
  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() getButtonId: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _sharedService: SharedService,
    private _befService: NgxBootstrapExpandedFeaturesService
  ) {}

  ngOnInit(): void {
    if (this.buttonId === '') {
      this.buttonId = this._sharedService.getRandomId(10);
    }
    this.getButtonId.emit(this.buttonId);
    this.manageButtonType();
  }

  manageButtonType(): void {
    switch (this.buttonType) {
      case 'rounded':
        this.buttonClass += ' bef-r-2rem bef-p-1rem ';
        this.buttonDisabledClass += ' bef-r-2rem bef-p-1rem ';
        break;
      case 'squared':
        this.buttonClass += ' bef-p-1rem ';
        this.buttonDisabledClass += ' bef-p-1rem ';
        break;
    }
  }

  cssCreate(): void {
    this._befService.cssCreate();
  }
}
