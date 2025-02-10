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
  privateNutritionUnitCost: 4005,
  publicInfirmaryUnitCost: 1136,
  privateInfirmaryUnitCost: 1704,
  publicPhysicalActivityUnitCost: 2670,
  privatePhysicalActivityUnitCost: 4005,
  publicPsychologyUnitCost: 1531,
  privatePsychologyUnitCost: 2297,
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
          value: 1.45,
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
          value: 14.8468536585366,
        },
        {
          name: 'Grado II',
          type: 'value',
          value: 12.336756097561,
        },
        {
          name: 'Grado I',
          type: 'value',
          value: 8.08891463414634,
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
          value: 39.8286097560975,
        },
        {
          name: 'Grado II',
          type: 'value',
          value: 37.7207073170732,
        },
        {
          name: 'Grado I',
          type: 'value',
          value: 33.9233170731707,
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
          value: 17.8634146341463,
        },
        {
          name: 'Grado II',
          type: 'value',
          value: 17.467,
        },
        {
          name: 'Grado I',
          type: 'value',
          value: 16.6742804878049,
        },
      ],
    },
  ],
};
