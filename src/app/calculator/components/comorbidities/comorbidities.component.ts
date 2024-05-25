import { Component } from '@angular/core';
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { GenericButtonComponent } from '../../../shared/components/generic-button/generic-button.component';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'comorbidities',
  standalone: true,
  imports: [GenericInputComponent,
    GenericButtonComponent, SafeHtmlPipe],
  templateUrl: './comorbidities.component.html',
  styleUrl: './comorbidities.component.scss'
})
export class ComorbiditiesComponent {

  constructor(private sharedService: SharedService) { }
  trueClasses: string = 'bef bef-bg-novo bef-bw-0 bef-color-white bef-mb-0_5rem bef-p-0_5rem bef-mx-1rem';
  falseClasses: string = 'bef bef-bg-#b2b7bf bef-bw-0 bef-color-gray bef-mb-0_5rem bef-p-0_5rem bef-mx-1rem';
  trueColors: string = 'bef bef-bg-novo bef-bw-0 bef-w-auto bef-color-white bef-h-5rem';
  falseColors: string = 'bef bef-d-flex bef-bg-#b2b7bf bef-bw-0 bef-w-auto bef-color-gray bef-h-5rem';

  thumbsUp = this.sharedService.getHtml('arriba');
  thumbsDown = this.sharedService.getHtml('abajo');
  hipertension = this.sharedService.getHtml('hipertension');
  dislipidemia = this.sharedService.getHtml('dislipidemia');
  prediabetes = this.sharedService.getHtml('prediabetes');
  arrowRight = this.sharedService.getHtml('arrowRight');

}
