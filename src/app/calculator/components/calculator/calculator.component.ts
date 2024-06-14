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
import { TObesityDegreesNames } from '../../types/obesityDegreesNames.type';
import { ArchieveGoalPatientsComponent } from '../archieve-goal-patients/archieve-goal-patients.component';
import { LiraglutideCostComponent } from '../liraglutide-cost/liraglutide-cost.component';
import { TLifeStyleModifications } from '../../types/lifeStyleModifications';
import { TInstitution } from '../../types/institution.type';
import { CalculatorService } from '../../services/calculator.service';

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
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent implements OnInit, OnChanges {
  constructor(
    private _sharedService: SharedService,
    private _calculatorService: CalculatorService
  ) {}
  get config() {
    return this._calculatorService.config$();
  }
  get calculatorData() {
    return this._calculatorService.calculatorData$();
  }

  public arrowLeft = this._sharedService.getHtml('arrowLeft');

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
          let selectedComorbidities: number = -2;
          let p: number = ['hipertensión', 'dislipidemia', 'prediabetes']
            .map((c): number => {
              let selectedComorbidity =
                this.calculatorData.comorbidities[c as keyof TComorbidities];
              if (!!selectedComorbidity) {
                let comorbidity: TComorbidity | undefined =
                  this.config.comorbidities.find((co) => co.name === c);
                if (!comorbidity) return 1;
                selectedComorbidities += 2;
                return comorbidity[k] as number;
              } else {
                return 1;
              }
            })
            .reduce((a, b) => a * b);
          p =
            p /
            Math.pow(
              10,
              selectedComorbidities !== -2 ? selectedComorbidities : 0
            );
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
}
