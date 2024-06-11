import { AfterViewInit, Component } from '@angular/core';
/* Services */
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';
@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [],
  templateUrl: './recovery.component.html',
  styleUrl: './recovery.component.scss',
})
export class RecoveryComponent implements AfterViewInit {
  constructor(private readonly _bef: NgxBootstrapExpandedFeaturesService) {}

  ngAfterViewInit(): void {
    this.cssCreate();
  }

  cssCreate() {
    this._bef.cssCreate();
  }
}
