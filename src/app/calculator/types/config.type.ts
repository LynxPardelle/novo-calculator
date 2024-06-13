import { TComorbidities } from './comorbidities.type';
export type TConfig = {
  /* Obesity Degrees  */
  percentageObesityDegreeI: number;
  percentageObesityDegreeII: number;
  percentageObesityDegreeIII: number;
  /* Comorbidities */
  comorbidities: TComorbidity[];
  /* Alternatives */
  alternatives: TAlternative[];
  /* Life Style */
  lifeStyles: TLifeStyle[];
  /* Treatment */
  privateCostTreatmentMultiplicator: number;
  publicNutritionUnitCost: number;
  privateNutritionUnitCost: number;
  publicInfirmaryUnitCost: number;
  privateInfirmaryUnitCost: number;
  publicPhysicalActivityUnitCost: number;
  privatePhysicalActivityUnitCost: number;
  publicPsychologyUnitCost: number;
  privatePsychologyUnitCost: number;
  /* Archive-Goal-Patients */
  treatMentGoal5LifestyleModification: number;
  treatMentGoal5LifestyleModificationNLirglutide: number;
  treatMentGoal10LifestyleModification: number;
  treatMentGoal10LifestyleModificationNLirglutide: number;
  treatMentGoal15LifestyleModification: number;
  treatMentGoal15LifestyleModificationNLirglutide: number;
  /* Liraglutide & LifeStyle Modification */
  obesityWLiraglutideProbs: TProb5<TObesityProbs>;
  obesityProbs: TProb5<TObesityProbs>;
  diseaseProbs: TProb3<TDiseaseProbs>;
};
export type TObesityProbs =
  | 'Obesidad grado III'
  | 'Obesidad grado II'
  | 'Obesidad grado I'
  | 'Sobrepeso o peso normal'
  | 'Muerte';
export type TDiseaseProbs =
  | 'Diabetes'
  | 'Enfermedad coronaria'
  | 'Accidente cerebrovascular'
  | 'Grado III'
  | 'Grado II'
  | 'Grado I';
export type TProb5<U> = [
  TProb<TProb5<U>, U>,
  TProb<TProb5<U>, U>,
  TProb<TProb5<U>, U>,
  TProb<TProb5<U>, U>,
  TProb<TProb5<U>, U>
];
export type TProb3<U> = [
  TProb<TProb3<U>, U>,
  TProb<TProb3<U>, U>,
  TProb<TProb3<U>, U>
];
export type TProb<T, U> = {
  name: U;
} & (
  | {
      value: number;
    }
  | {
      probs: T;
    }
);

export type TComorbidity = {
  name: string;
  percentageObesityI: number;
  percentageObesityII: number;
  percentageObesityIII: number;
};

export type TAlternative = {
  id: string;
  name: string;
  presentation: string;
  governmentTreatmentUnitCost: number;
  governmentAnnualTreatmentCost: number;
  privateTreatmentUnitCost: number;
  privateAnnualTreatmentCost: number;
};

export type TLifeStyle = {
  name: string;
  unitCost: number;
};
