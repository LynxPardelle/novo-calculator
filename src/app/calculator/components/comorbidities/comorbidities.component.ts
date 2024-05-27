import { Component } from '@angular/core';
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'comorbidities',
  standalone: true,
  imports: [GenericInputComponent, GenericButtonComponent, SafeHtmlPipe],
  templateUrl: './comorbidities.component.html',
  styleUrl: './comorbidities.component.scss',
})
export class ComorbiditiesComponent {
  constructor(private sharedService: SharedService) {}
  public trueClasses: string =
    'bef bef-bg-novo bef-bw-0 bef-color-white bef-mb-0_5rem bef-p-0_5rem bef-mx-1rem';
  public falseClasses: string =
    'bef bef-bg-#b2b7bf bef-bw-0 bef-color-gray bef-mb-0_5rem bef-p-0_5rem bef-mx-1rem';
  public trueColors: string =
    'bef bef-bg-novo bef-bw-0 bef-w-auto bef-color-white bef-h-5rem';
  public falseColors: string =
    'bef bef-d-flex bef-bg-#b2b7bf bef-bw-0 bef-w-auto bef-color-gray bef-h-5rem';

  public thumbsUp = this.sharedService.getHtml('arriba');
  public thumbsDown = this.sharedService.getHtml('abajo');
  public hipertension = this.sharedService.getHtml('hipertension');
  public dislipidemia = this.sharedService.getHtml('dislipidemia');
  public prediabetes = this.sharedService.getHtml('prediabetes');
  public arrowRight = this.sharedService.getHtml('arrowRight');
}
