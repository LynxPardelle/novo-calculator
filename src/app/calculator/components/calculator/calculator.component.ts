import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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
import { ObesityDegreesComponent } from '../obesity-degrees/obesity-degrees.component';
import { TreatmentCostComponent } from '../treatment-cost/treatment-cost.component';
import { AnualTreatmentCostComponent } from '../anual-treatment-cost/anual-treatment-cost.component';
/* Pipes */
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { LiraglutideAndLifestyleModificationComponent } from '../liraglutide-and-lifestyle-modification/liraglutide-and-lifestyle-modification.component';
import { PatientsComponent } from '../patients/patients.component';
import { TObesityDegrees } from '../../types/obesityDegrees.type';
import { TComorbidity, TConfig } from '../../types/config.type';
import { TComorbidities } from '../../types/comorbidities.type';
import { TCalculatorData } from '../../types/calculatorData.type';
import { TObesityDegreesNames } from '../../types/obesityDegreesNames.type';
import { ArchieveGoalPatientsComponent } from '../archieve-goal-patients/archieve-goal-patients.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    RouterLink,
    SharedModule,
    GenericInputComponent,
    GenericButtonComponent,
    GenericSpanComponent,
    PatientEstimationComponent,
    ComorbiditiesComponent,
    ObesityDegreesComponent,
    TreatmentCostComponent,
    AnualTreatmentCostComponent,
    ArchieveGoalPatientsComponent,
    LiraglutideAndLifestyleModificationComponent,
    PatientsComponent,
    SafeHtmlPipe,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent implements OnInit {
  public calculatorData: TCalculatorData = {
    institution: 'private',
    /* Pacient */
    totalPopulation: 10000,
    patientsPercentage: 36.9,
    patients: 3690,
    /* Obesity */
    obesityDegrees: {
      grade1: false,
      grade2: false,
      grade3: false,
    },
    obesityText: '',
    obesityPatientsPercentage: 0,
    obesityPatients: 0,
    /* Comorbidities */
    needsComorbidities: false,
    comorbidities: {
      hipertensión: false,
      dislipidemia: false,
      prediabetes: false,
    },
    comorbiditiesText: '',
    comorbiditiesPatientsPercentage: 0,
    comorbiditiesPatients: 0,
    populationTotal: 0,
    /* Treatment */
  };
  public config: TConfig = {
    /* Obesity */
    percentageObesityDegreeI: 65.5826558265583,
    percentageObesityDegreeII: 23.5772357723577,
    percentageObesityDegreeIII: 10.840108401084,
    /* Comorbidities */
    comorbidities: [
      {
        name: 'hipertensión',
        percentageObesityI: 20.2,
        percentageObesityII: 25.4,
        percentageObesityIII: 30.1,
      },
      {
        name: 'dislipidemia',
        percentageObesityI: 27.1,
        percentageObesityII: 27.8,
        percentageObesityIII: 24.5,
      },
      {
        name: 'prediabetes',
        percentageObesityI: 22.1,
        percentageObesityII: 22.1,
        percentageObesityIII: 22.1,
      },
    ],
    /* Treatment */
    alternatives: [],
    lifeStyles: [],
    /* Treatment */
    publicUnitCost: 2325,
    publicAnualCost: 45208.33,
    privateUnitCost: 4141.16,
    privateAnualCost: 80522.56,
    privateCostTreatmentMultiplicator: 19.44,
  };
  constructor(private _sharedService: SharedService) {}
  public arrowLeft = this._sharedService.getHtml('arrowLeft');

  ngOnInit(): void {
    this.percentageCalculation();
  }
  /* Patient Estimation */
  totalPopulationChange(event: any) {
    this.calculatorData.totalPopulation = event;
    this.percentageCalculation();
  }

  percentageCalculation() {
    this.calculatorData.patients = Math.round(
      (this.calculatorData.patientsPercentage / 100) *
        this.calculatorData.totalPopulation
    );
  }
  /* Obesity Degrees */
  degreesChange(event: TObesityDegrees) {
    this.calculatorData.obesityDegrees = event;
    this.calculatorData.obesityText = Object.keys(
      this.calculatorData.obesityDegrees
    )
      .filter((key) => {
        return (
          this.calculatorData.obesityDegrees[key as keyof TObesityDegrees] ===
          true
        );
      })
      .join(' + ')
      .replace(/grade/g, 'Grado ');
    this.manageObesityPatientsPercentage();
  }

  manageObesityPatientsPercentage() {
    this.calculatorData.obesityPatientsPercentage = 0;
    [
      ['1', 'I'],
      ['2', 'II'],
      ['3', 'III'],
    ].forEach((d: string[]) => {
      let degree = `grade${d[0]}` as keyof TObesityDegrees;
      let selectedDegree = this.calculatorData.obesityDegrees[degree];
      if (!!selectedDegree) {
        let key = `percentageObesityDegree${d[1]}`;
        let percentage: number = this.config[key as keyof TConfig] as number;
        this.calculatorData.obesityPatientsPercentage += percentage;
      }
    });
    this.calculatorData.obesityPatients = Math.round(
      (this.calculatorData.obesityPatientsPercentage / 100) *
        this.calculatorData.patients
    );
    if (!!this.calculatorData.needsComorbidities) {
      this.manageComorbiditiesPatientsPercentage();
    } else {
      this.calculatorData.populationTotal = this.calculatorData.obesityPatients;
    }
  }
  /* Comorbidities */
  needsComorbiditiesChange(event: boolean) {
    this.calculatorData.needsComorbidities = event;
    if (!!this.calculatorData.needsComorbidities) {
      this.manageComorbiditiesPatientsPercentage();
    } else {
      this.calculatorData.populationTotal = this.calculatorData.obesityPatients;
    }
  }
  comorbiditiesChange(event: TComorbidities) {
    this.calculatorData.comorbidities = event;
    this.calculatorData.comorbiditiesText = Object.keys(
      this.calculatorData.comorbidities
    )
      .filter((key) => {
        return (
          this.calculatorData.comorbidities[key as keyof TComorbidities] ===
          true
        );
      })
      .join(' + ');
    this.manageComorbiditiesPatientsPercentage();
  }
  manageComorbiditiesPatientsPercentage() {
    let comorbiditiesPatientsPerDegree: TObesityDegreesNames = {
      grade1: 0,
      grade2: 0,
      grade3: 0,
    };
    this.calculatorData.comorbiditiesPatients = 0;
    let percentage = [
      ['1', 'I'],
      ['2', 'II'],
      ['3', 'III'],
    ]
      .map((d: string[]): number => {
        let degree = `grade${d[0]}` as keyof TObesityDegrees;
        let selectedDegree = this.calculatorData.obesityDegrees[degree];
        if (!!selectedDegree) {
          let k = `percentageObesity${d[1]}` as keyof TComorbidity;
          let selectedComorbidities: number = 1;
          let p: number = ['hipertensión', 'dislipidemia', 'prediabetes']
            .map((c): number => {
              let selectedComorbidity =
                this.calculatorData.comorbidities[c as keyof TComorbidities];
              if (!!selectedComorbidity) {
                let comorbidity: TComorbidity | undefined =
                  this.config.comorbidities.find((co) => co.name === c);
                if (!comorbidity) return 1;
                selectedComorbidities++;
                return comorbidity[k] as number;
              } else {
                return 1;
              }
            })
            .reduce((a, b) => a * b);
          p = p / Math.pow(10, selectedComorbidities);
          if (p === 1 || p === 0.1) p = 0;
          let de: number = this.config[
            `percentageObesityDegree${d[1]}` as keyof TConfig
          ] as number;
          let patients: number = this.calculatorData.patients * (de / 100);
          let comorbiditiesPatients: number = (p / 100) * patients;
          comorbiditiesPatientsPerDegree[degree] = comorbiditiesPatients;
          return p;
        } else {
          return 0;
        }
      })
      .reduce((a, b) => a + b);
    this.calculatorData.comorbiditiesPatientsPercentage = percentage;
    this.calculatorData.comorbiditiesPatients =
      comorbiditiesPatientsPerDegree.grade1 +
      comorbiditiesPatientsPerDegree.grade2 +
      comorbiditiesPatientsPerDegree.grade3;
    this.calculatorData.populationTotal =
      this.calculatorData.comorbiditiesPatients;
  }
  /* Treatment Cost */
  unitCostChange(event: number) {
    if (this.calculatorData.institution === 'private') {
      this.config.privateUnitCost = event;
      console.log('privateUnitCost', this.config.privateUnitCost);
      this.config.privateAnualCost =
        this.config.privateUnitCost *
        this.config.privateCostTreatmentMultiplicator;
      console.log('privateAnualCost', this.config.privateAnualCost);
    } else {
      this.config.publicUnitCost = event;
    }
  }
}
