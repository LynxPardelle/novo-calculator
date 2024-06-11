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
  publicUnitCost: number;
  publicAnualCost: number;
  privateUnitCost: number;
  privateAnualCost: number;
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
};

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
