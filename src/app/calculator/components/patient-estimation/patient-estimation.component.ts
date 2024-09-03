import { Component, EventEmitter, Input, Output } from '@angular/core';
/* Modules */
/* Services */
import { SharedService } from '../../../shared/services/shared.service';
/* Components */
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericSpanComponent } from '../../../shared/components/generic-span/generic-span.component';
/* Pipes */
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'patient-estimation',
  standalone: true,
  imports: [GenericInputComponent, GenericSpanComponent, SafeHtmlPipe],
  templateUrl: './patient-estimation.component.html',
  styleUrl: './patient-estimation.component.scss',
})
export class PatientEstimationComponent {
  @Input() patientsPercentage: number = 36.9;
  @Input() patients: number = 3690;
  @Input() totalPopulation: number = 10000;
  @Output() totalPopulationChange: EventEmitter<number> =
    new EventEmitter<number>();
  constructor(private _sharedService: SharedService) {}
  public filledClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-bcb-white bef-bwb-3px bef-rt-0_5px bef-bg-rgbaSD255COM__255COM__255COM__0_24ED';
  public emptyClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-bcb-white bef-bwb-3px bef-rt-0_5px bef-bg-rgbaSD255COM__255COM__255COM__0_24ED';
  public arrowRight = this._sharedService.getHtml('arrowRight');
  public fatDouble = this._sharedService.getHtml('fatDouble');
  public person1 = this._sharedService.getHtml('person1');
}
