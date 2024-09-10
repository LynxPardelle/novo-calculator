import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
import { ArchieveGoalPatientsComponent } from '../archieve-goal-patients/archieve-goal-patients.component';
import { LiraglutideCostComponent } from '../liraglutide-cost/liraglutide-cost.component';
import { TLifeStyleModifications } from '../../types/lifeStyleModifications';
import { TInstitution } from '../../types/institution.type';
import { CalculatorService } from '../../services/calculator.service';
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';

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
    LiraglutideCostComponent,
    TreatmentCostComponent,
    AnualTreatmentCostComponent,
    ArchieveGoalPatientsComponent,
    LiraglutideAndLifestyleModificationComponent,
    PatientsComponent,
    SafeHtmlPipe,
  ],
  providers: [
    CalculatorService,
    SharedService,
    NgxBootstrapExpandedFeaturesService,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent implements OnInit, OnChanges {
  constructor(
    private _sharedService: SharedService,
    private _bef: NgxBootstrapExpandedFeaturesService,
    private _calculatorService: CalculatorService
  ) {}
  get config() {
    return this._calculatorService.config$();
  }
  get calculatorData() {
    return this._calculatorService.calculatorData$();
  }

  public arrowLeft = this._sharedService.getHtml('arrowLeft');

  public showPopUp1: boolean = false;
  public showPopUp2: boolean = false;
  public filledClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-bcb-novo bef-bwb-3px bef-rt-0_5px bef-bg-white ';
  public emptyClasses: string =
    'bef bef-d-flex jusCon-center aliIte-center bef-bsb-solid bef-bcb-novo bef-bwb-3px bef-rt-0_5px bef-bg-white ';

  ngOnInit(): void {
    this.percentageCalculation();
    this.calculatorDataInitialAnualCostChange();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['calculatorData'] &&
      changes['calculatorData'].currentValue !==
        changes['calculatorData'].previousValue
    ) {
    }
  }

  setCalculatorData() {
    this._calculatorService.calculatorData$.set(
      JSON.parse(JSON.stringify(this.calculatorData))
    );
  }
  /* Patient Estimation */
  totalPopulationChange(event: any) {
    this.calculatorData.totalPopulation = event;
    this.percentageCalculation();
    this.manageObesityPatientsPercentage();
  }

  percentageCalculation() {
    this.calculatorData.patients = Math.round(
      (this.calculatorData.patientsPercentage / 100) *
        this.calculatorData.totalPopulation
    );
    this.setCalculatorData();
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
        this.calculatorData[
          `obesityGrade${d[1] as 'I' | 'II' | 'III'}PatientsPercentage`
        ] = percentage;
        this.calculatorData[
          `obesityGrade${d[1] as 'I' | 'II' | 'III'}Patients`
        ] = Math.round(
          (this.calculatorData[
            `obesityGrade${d[1] as 'I' | 'II' | 'III'}PatientsPercentage`
          ] /
            100) *
            this.calculatorData.patients
        );
      } else {
        this.calculatorData[
          `obesityGrade${d[1] as 'I' | 'II' | 'III'}Patients`
        ] = 0;
        this.calculatorData[
          `obesityGrade${d[1] as 'I' | 'II' | 'III'}PatientsPercentage`
        ] = 0;
      }
    });
    this.calculatorData.obesityPatientsPercentage =
      this.calculatorData.obesityGradeIPatientsPercentage +
      this.calculatorData.obesityGradeIIPatientsPercentage +
      this.calculatorData.obesityGradeIIIPatientsPercentage;
    this.calculatorData.obesityPatients =
      this.calculatorData.obesityGradeIPatients +
      this.calculatorData.obesityGradeIIPatients +
      this.calculatorData.obesityGradeIIIPatients;
    if (!!this.calculatorData.needsComorbidities) {
      this.manageComorbiditiesPatientsPercentage();
    } else {
      this.calculatorData.populationTotal = this.calculatorData.obesityPatients;
      this.treatmentGoalToChange();
    }
  }
  /* Comorbidities */
  needsComorbiditiesChange(event: boolean) {
    this.calculatorData.needsComorbidities = event;
    if (!!this.calculatorData.needsComorbidities) {
      this.manageComorbiditiesPatientsPercentage();
    } else {
      this.calculatorData.populationTotal = this.calculatorData.obesityPatients;
      this.treatmentGoalToChange();
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
    this.calculatorData.comorbiditiesPatients = 0;
    let percentage: number[] | number = [
      ['1', 'I'],
      ['2', 'II'],
      ['3', 'III'],
    ].map((d: string[]): number => {
      if (
        !!this.calculatorData.obesityDegrees[
          `grade${d[0]}` as keyof TObesityDegrees
        ]
      ) {
        let k = `percentageObesity${d[1]}` as keyof TComorbidity;
        let p: number = Object.keys(this.calculatorData.comorbidities)
          .map((c: string): number => {
            if (!this.calculatorData.comorbidities[c as keyof TComorbidities]) {
              return 0;
            }
            let comorbidity: TComorbidity | undefined =
              this.config.comorbidities.find((co) => co.name === c);
            if (!comorbidity) return 0;
            return comorbidity[k] as number;
          })
          .reduce((a, b) => a + b);
        return p;
      } else {
        return 100;
      }
    });
    this.calculatorData.comorbiditiesPatientsPercentage = percentage.every(
      (p) => p === 100
    )
      ? 0
      : percentage.reduce((a, b) => a * b) / 10000;
    let patientsPercentageDegree1: number = !!this.calculatorData.obesityDegrees
      .grade1
      ? this.calculatorData.patients *
        (this.config.percentageObesityDegreeI / 100)
      : 0;
    let patientsPercentageDegree2: number = !!this.calculatorData.obesityDegrees
      .grade2
      ? this.calculatorData.patients *
        (this.config.percentageObesityDegreeII / 100)
      : 0;
    let patientsPercentageDegree3: number = !!this.calculatorData.obesityDegrees
      .grade3
      ? this.calculatorData.patients *
        (this.config.percentageObesityDegreeIII / 100)
      : 0;
    this.calculatorData.comorbiditiesPatients =
      patientsPercentageDegree1 * (percentage[0] / 100) +
      patientsPercentageDegree2 * (percentage[1] / 100) +
      patientsPercentageDegree3 * (percentage[2] / 100);
    this.calculatorData.populationTotal =
      this.calculatorData.comorbiditiesPatients;
    this.treatmentGoalToChange();
  }
  /* Treatment Cost */
  unitCostChange(event: number) {
    let inst: TInstitution = this.calculatorData.institution;
    this.calculatorData[`${inst}UnitCost`] = event;
    this.calculatorData[`${inst}AnualCost`] =
      this.calculatorData[`${inst}UnitCost`] *
      (inst === 'private' ? this.config.privateCostTreatmentMultiplicator : 1);
    this.calculatorDataInitialAnualCostChange();
  }
  /* Anual Treatment Cost */
  calculatorDataInitialAnualCostChange() {
    let lifeStyleModifications: TLifeStyleModifications[] = [
      'nutrition',
      'infirmary',
      'physicalActivity',
      'psychology',
    ];
    lifeStyleModifications.forEach((value: TLifeStyleModifications): void => {
      this.anualCostChange(value);
    });
  }
  anualCostChange(type: TLifeStyleModifications, event?: number) {
    let inst: TInstitution = this.calculatorData.institution;
    this.calculatorData[`${type}Months`] =
      event || this.calculatorData[`${type}Months`];
    this.calculatorData[`${type}AnualCost`] =
      (this.config[
        `${inst}${this._sharedService.capitalizeFirstLetter(
          type
        )}UnitCost` as keyof TConfig
      ] as number) * this.calculatorData[`${type}Months`];
    this.calculatorData.totalAnualCost =
      this.calculatorData.nutritionAnualCost +
      this.calculatorData.infirmaryAnualCost +
      this.calculatorData.physicalActivityAnualCost +
      this.calculatorData.psychologyAnualCost;
    this.calculatorData.totalAnualCostPlusLiraglutide =
      this.calculatorData.totalAnualCost +
      (this.calculatorData[
        `${inst}AnualCost` as keyof TCalculatorData
      ] as number);
    this.treatmentGoalToChange();
  }
  /* Archive-Goal-Patients */
  selectTreatmentGoalPercentage(event: any) {
    console.log('event', event);
    this.calculatorData.treatmentGoalPercentage = parseInt(
      event.treatmentGoalPercentage
    ) as 5 | 10 | 15;
    console.log(
      'calculatorData.treatmentGoalPercentage',
      this.calculatorData.treatmentGoalPercentage
    );
    this.treatmentGoalToChange();
  }
  treatmentGoalToChange() {
    let populationTotal: number = this.calculatorData.populationTotal / 100;
    this.calculatorData.archieveGoal =
      populationTotal *
      (this.config[
        `treatMentGoal${this.calculatorData.treatmentGoalPercentage}LifestyleModification` as keyof TConfig
      ] as number);
    this.calculatorData.archiveGoalPercentage =
      this.calculatorData.archieveGoal / populationTotal;
    this.calculatorData.lifeStyleModification =
      this.calculatorData.totalAnualCost /
      (this.calculatorData.archiveGoalPercentage / 100);
    this.calculatorData.archieveGoalWithLiraglutide =
      populationTotal *
      (this.config[
        `treatMentGoal${this.calculatorData.treatmentGoalPercentage}LifestyleModificationNLirglutide` as keyof TConfig
      ] as number);
    this.calculatorData.archiveGoalWithLiraglutidePercentage =
      this.calculatorData.archieveGoalWithLiraglutide / populationTotal;
    this.calculatorData.liraglutideNLifeStyleModification =
      this.calculatorData.totalAnualCostPlusLiraglutide /
      (this.calculatorData.archiveGoalWithLiraglutidePercentage / 100);

    this.calculatorData.moreTimes =
      this.calculatorData.archieveGoalWithLiraglutide /
      this.calculatorData.archieveGoal;
    this.calculatorData.dontArchiveGoal =
      this.calculatorData.populationTotal - this.calculatorData.archieveGoal;
    this.calculatorData.dontArchiveGoalPercentage =
      this.calculatorData.dontArchiveGoal / populationTotal;
    this.calculatorData.dontArchiveGoalWithLiraglutide =
      this.calculatorData.populationTotal -
      this.calculatorData.archieveGoalWithLiraglutide;
    this.calculatorData.dontArchiveGoalWithLiraglutidePercentage =
      this.calculatorData.dontArchiveGoalWithLiraglutide / populationTotal;
    this.setCalculatorData();
  }

  cssCreate() {
    setTimeout(() => {
      this._bef.cssCreate();
    }, 100);
  }
}
