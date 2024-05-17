type TConfig = {
  /* Grados de obesidad */
  gradoObsesidadIPorcentaje: number;
  gradoObsesidadIIPorcentaje: number;
  gradoObsesidadIIIPorcentaje: number;
  /* Comorbilidades */
  comorbilidades: TCormobilidad[];
  /* Comorbilidades: Hipertensión */
  /* hipertensionPorcentajeObesidadI: number;
  hipertensionPorcentajeObesidadII: number;
  hipertensionPorcentajeObesidadIII: number; */
  /* Comorbilidades: Dislipidemia */
  /* dislipidemiaPorcentajeObesidadI: number;
  dislipidemiaPorcentajeObesidadII: number;
  dislipidemiaPorcentajeObesidadIII: number; */
  /* Comorbilidades: Prediabetes */
  /* prediabetesPorcentajeObesidadI: number;
  prediabetesPorcentajeObesidadII: number;
  prediabetesPorcentajeObesidadIII: number; */
  /* Costos Alternativas*/
  alternativas: TAlternativa[];
  /* Estilo de Vida */
  estilosVida: TEstiloVida[];
  /*  nutricionUnitario: number;
  enfermeriaUnitario: number;
  psicologiaUnitario: number;
  actividadFisicaUnitario: number; */
};
type TCormobilidad = {
  name: string;
  porcentajeObesidadI: number;
  porcentajeObesidadII: number;
  porcentajeObesidadIII: number;
};

type TAlternativa = {
  id: string;
  name: string;
  presentation: string;
  costoTratamientoUnitarioGobierno: number;
  costoTratamientoAnualGobierno: number;
  costoTratamientoUnitarioPrivado: number;
  costoTratamientoAnualPrivado: number;
};

type TEstiloVida = {
  name: string;
  costoUnitario: number;
};
