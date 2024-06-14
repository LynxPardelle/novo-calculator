import { TConfig } from '../../types/config.type';
export const config: TConfig = {
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
  /* Liraglutide */
  /* AnualTreatment */
  privateCostTreatmentMultiplicator: 19.44,
  publicNutritionUnitCost: 2670,
  privateNutritionUnitCost: 5340,
  publicInfirmaryUnitCost: 1136,
  privateInfirmaryUnitCost: 2272,
  publicPhysicalActivityUnitCost: 2570,
  privatePhysicalActivityUnitCost: 5340,
  publicPsychologyUnitCost: 1531,
  privatePsychologyUnitCost: 3062,
  /* Archive-Goal-Patients */
  treatMentGoal5LifestyleModification: 27.1,
  treatMentGoal5LifestyleModificationNLirglutide: 63.2,
  treatMentGoal10LifestyleModification: 10.6,
  treatMentGoal10LifestyleModificationNLirglutide: 33.1,
  treatMentGoal15LifestyleModification: 3.5,
  treatMentGoal15LifestyleModificationNLirglutide: 14.4,
  /* Liraglutide & LifeStyle Modification */
  obesityWLiraglutideProbs: [
    {
      name: 'Obesidad grado III',
      type: 'props',
      probs: [
        {
          name: 'Obesidad grado III',
          type: 'value',
          value: 145,
        },
        {
          name: 'Obesidad grado II',
          type: 'value',
          value: 23.41,
        },
        {
          name: 'Obesidad grado I',
          type: 'value',
          value: 0,
        },
        {
          name: 'Sobrepeso o peso normal',
          type: 'value',
          value: 163,
        },
        {
          name: 'Muerte',
          type: 'value',
          value: 0,
        },
      ],
    },
    {
      name: 'Obesidad grado II',
      type: 'props',
      probs: [
        {
          name: 'Obesidad grado III',
          type: 'value',
          value: 64.5,
        },
        {
          name: 'Obesidad grado II',
          type: 'value',
          value: 42.54,
        },
        {
          name: 'Obesidad grado I',
          type: 'value',
          value: 0,
        },
        {
          name: 'Sobrepeso o peso normal',
          type: 'value',
          value: 1.63,
        },
        {
          name: 'Muerte',
          type: 'value',
          value: 0,
        },
      ],
    },
    {
      name: 'Obesidad grado I',
      type: 'props',
      probs: [
        {
          name: 'Obesidad grado III',
          type: 'value',
          value: 8.1,
        },
        {
          name: 'Obesidad grado II',
          type: 'value',
          value: 8.1,
        },
        {
          name: 'Obesidad grado I',
          type: 'value',
          value: 74.05,
        },
        {
          name: 'Sobrepeso o peso normal',
          type: 'value',
          value: 1.63,
        },
        {
          name: 'Muerte',
          type: 'value',
          value: 0,
        },
      ],
    },
    {
      name: 'Sobrepeso o peso normal',
      type: 'props',
      probs: [
        {
          name: 'Obesidad grado III',
          type: 'value',
          value: 0.1,
        },
        {
          name: 'Obesidad grado II',
          type: 'value',
          value: 0.1,
        },
        {
          name: 'Obesidad grado I',
          type: 'value',
          value: 0.1,
        },
        {
          name: 'Sobrepeso o peso normal',
          type: 'value',
          value: 69.25,
        },
        {
          name: 'Muerte',
          type: 'value',
          value: 0,
        },
      ],
    },
    {
      name: 'Muerte',
      type: 'props',
      probs: [
        {
          name: 'Obesidad grado III',
          type: 'value',
          value: 25.85,
        },
        {
          name: 'Obesidad grado II',
          type: 'value',
          value: 25.85,
        },
        {
          name: 'Obesidad grado I',
          type: 'value',
          value: 25.85,
        },
        {
          name: 'Sobrepeso o peso normal',
          type: 'value',
          value: 25.85,
        },
        {
          name: 'Muerte',
          type: 'value',
          value: 100,
        },
      ],
    },
  ],
  obesityProbs: [
    {
      name: 'Obesidad grado III',
      type: 'props',
      probs: [
        {
          name: 'Obesidad grado III',
          type: 'value',
          value: 34.15,
        },
        {
          name: 'Obesidad grado II',
          type: 'value',
          value: 44.62,
        },
        {
          name: 'Obesidad grado I',
          type: 'value',
          value: 0,
        },
        {
          name: 'Sobrepeso o peso normal',
          type: 'value',
          value: 1.63,
        },
        {
          name: 'Muerte',
          type: 'value',
          value: 0,
        },
      ],
    },
    {
      name: 'Obesidad grado II',
      type: 'props',
      probs: [
        {
          name: 'Obesidad grado III',
          type: 'value',
          value: 39,
        },
        {
          name: 'Obesidad grado II',
          type: 'value',
          value: 28.53,
        },
        {
          name: 'Obesidad grado I',
          type: 'value',
          value: 0,
        },
        {
          name: 'Sobrepeso o peso normal',
          type: 'value',
          value: 1.63,
        },
        {
          name: 'Muerte',
          type: 'value',
          value: 0,
        },
      ],
    },
    {
      name: 'Obesidad grado I',
      type: 'props',
      probs: [
        {
          name: 'Obesidad grado III',
          type: 'value',
          value: 1,
        },
        {
          name: 'Obesidad grado II',
          type: 'value',
          value: 1,
        },
        {
          name: 'Obesidad grado I',
          type: 'value',
          value: 74.15,
        },
        {
          name: 'Sobrepeso o peso normal',
          type: 'value',
          value: 1.63,
        },
        {
          name: 'Muerte',
          type: 'value',
          value: 0,
        },
      ],
    },
    {
      name: 'Sobrepeso o peso normal',
      type: 'props',
      probs: [
        {
          name: 'Obesidad grado III',
          type: 'value',
          value: 0,
        },
        {
          name: 'Obesidad grado II',
          type: 'value',
          value: 0,
        },
        {
          name: 'Obesidad grado I',
          type: 'value',
          value: 0,
        },
        {
          name: 'Sobrepeso o peso normal',
          type: 'value',
          value: 69.25,
        },
        {
          name: 'Muerte',
          type: 'value',
          value: 0,
        },
      ],
    },
    {
      name: 'Muerte',
      type: 'props',
      probs: [
        {
          name: 'Obesidad grado III',
          type: 'value',
          value: 25.85,
        },
        {
          name: 'Obesidad grado II',
          type: 'value',
          value: 25.85,
        },
        {
          name: 'Obesidad grado I',
          type: 'value',
          value: 25.85,
        },
        {
          name: 'Sobrepeso o peso normal',
          type: 'value',
          value: 25.85,
        },
        {
          name: 'Muerte',
          type: 'value',
          value: 100,
        },
      ],
    },
  ],
  diseaseProbs: [
    {
      name: 'Diabetes',
      type: 'props',
      probs: [
        {
          name: 'Grado III',
          type: 'value',
          value: 15,
        },
        {
          name: 'Grado II',
          type: 'value',
          value: 12,
        },
        {
          name: 'Grado I',
          type: 'value',
          value: 8,
        },
      ],
    },
    {
      name: 'Enfermedad coronaria',
      type: 'props',
      probs: [
        {
          name: 'Grado III',
          type: 'value',
          value: 40,
        },
        {
          name: 'Grado II',
          type: 'value',
          value: 38,
        },
        {
          name: 'Grado I',
          type: 'value',
          value: 34,
        },
      ],
    },
    {
      name: 'Accidente cerebrovascular',
      type: 'props',
      probs: [
        {
          name: 'Grado III',
          type: 'value',
          value: 18,
        },
        {
          name: 'Grado II',
          type: 'value',
          value: 17,
        },
        {
          name: 'Grado I',
          type: 'value',
          value: 17,
        },
      ],
    },
  ],
};
