import { AfterViewInit, Component } from '@angular/core';
/* Services */
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';
@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent implements AfterViewInit {
  constructor(private readonly _bef: NgxBootstrapExpandedFeaturesService) {}

  ngAfterViewInit(): void {
    this.cssCreate();
  }

  cssCreate() {
    this._bef.cssCreate();
  }
}
