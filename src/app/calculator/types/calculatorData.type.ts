import { TComorbidities } from './comorbidities.type';
import { TInstitution } from './institution.type';
import { TObesityDegrees } from './obesityDegrees.type';

export type TCalculatorData = {
  institution: TInstitution;
  totalPopulation: number;
  patientsPercentage: number;
  patients: number;
  obesityDegrees: TObesityDegrees;
  obesityText: string;
  obesityPatientsPercentage: number;
  obesityPatients: number;
  needsComorbidities: boolean;
  comorbidities: TComorbidities;
  comorbiditiesText: string;
  comorbiditiesPatientsPercentage: number;
  comorbiditiesPatients: number;
  populationTotal: number;
  nutritionMonths: number;
  infirmaryMonths: number;
  physicalActivityMonths: number;
  psychologyMonths: number;
  nutritionAnualCost: number;
  infirmaryAnualCost: number;
  physicalActivityAnualCost: number;
  psychologyAnualCost: number;
  totalAnualCost: number;
  totalAnualCostPlusLiraglutide: number;
  /* Archieve Goals Patients */
  treatmentGoalPercentage: 5 | 10 | 15;
  lifeStyleModification: number;
  liraglutideNLifeStyleModification: number;
};
