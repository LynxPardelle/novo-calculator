import { Component } from '@angular/core';
/* Modules */
import { SharedModule } from '../../../shared/shared.module';
/* Services */
import { SharedService } from '../../../shared/services/shared.service';
/* Components */
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';
import { GenericSpanComponent } from '../../../shared/components/generic-span/generic-span.component';
import { PatientEstimationComponent } from '../patient-estimation/patient-estimation.component';
import { ComorbiditiesComponent } from '../comorbidities/comorbidities.component';
/* Pipes */
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { ObesityDegreesComponent } from '../obesity-degrees/obesity-degrees.component';
import { TreatmentCostComponent } from '../treatment-cost/treatment-cost.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    GenericInputComponent,
    GenericButtonComponent,
    GenericSpanComponent,
    PatientEstimationComponent,
    ComorbiditiesComponent,
    ObesityDegreesComponent,
    TreatmentCostComponent,
    SafeHtmlPipe,
    SharedModule,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  constructor(private _sharedService: SharedService) {}
  public arrowLeft = this._sharedService.getHtml('arrowLeft');
}
