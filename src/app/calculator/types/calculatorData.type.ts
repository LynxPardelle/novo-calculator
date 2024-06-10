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
  months: number;
};
