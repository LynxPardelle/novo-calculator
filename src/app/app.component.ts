import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* Services */
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';
/*Modules*/
import { SharedModule } from './shared/shared.module';
/*components*/
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, ButtonComponent, InputComponent],
  providers: [NgxBootstrapExpandedFeaturesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  constructor(private readonly _bef: NgxBootstrapExpandedFeaturesService) {}
  ngAfterViewInit(): void {
    this.cssCreate();
  }
  cssCreate() {
    this._bef.cssCreate();
  }
}
