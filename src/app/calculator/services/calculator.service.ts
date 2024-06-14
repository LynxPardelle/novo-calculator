import {
  computed,
  effect,
  inject,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import {
  TConfig,
  TDiseaseProbs,
  TObesityProbs,
  TProb,
  TProb3,
  TProb5,
} from '../types/config.type';
import { config } from './data/config.data';
import { TCalculatorData } from '../types/calculatorData.type';
import { calculatorData } from './data/calculatorData.data';
import { SharedService } from '../../shared/services/shared.service';
import { TNumber10, TNumber3, TNumber5 } from '../../shared/types/numbers.type';
import { TPatients } from '../components/patients/patients.component';

export type TPatientsDetails = {
  liraglutideNLifeStyleModification: TNumber10;
  lifeStyleModification: TNumber10;
};
@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  public config$: Signal<TConfig> = signal<TConfig>(config);
  public calculatorData$: WritableSignal<TCalculatorData> =
    signal<TCalculatorData>(calculatorData);
  constructor(private _sharedService: SharedService) {}

  public patients$: Signal<TPatients[]> = computed(() => {
    let calculatorData = this.calculatorData$();

    let initialArr: TNumber5 = [
      calculatorData.obesityGradeIIIPatients,
      calculatorData.obesityGradeIIPatients,
      calculatorData.obesityGradeIPatients,
      0,
      0,
    ];
    let obesityTable: TNumber5[] = this.getTable(
      initialArr,
      'obesityProbs',
      10
    );
    obesityTable.shift();
    let obesityWLiraglutideTable: TNumber5[] = this.getTable(
      initialArr,
      'obesityWLiraglutideProbs',
      10
    );
    obesityWLiraglutideTable.shift();
    let diabetesTable: TNumber10 = this.convertTable(obesityTable, 'Diabetes');
    let diabetesWLiraglutideTable: TNumber10 = this.convertTable(
      obesityWLiraglutideTable,
      'Diabetes'
    );
    let coronaryTable: TNumber10 = this.convertTable(
      obesityTable,
      'Enfermedad coronaria'
    );
    let coronaryWLiraglutideTable: TNumber10 = this.convertTable(
      obesityWLiraglutideTable,
      'Enfermedad coronaria'
    );
    let cerebroVascularTable: TNumber10 = this.convertTable(
      obesityTable,
      'Accidente cerebrovascular'
    );
    let cerebroVascularWLiraglutideTable: TNumber10 = this.convertTable(
      obesityWLiraglutideTable,
      'Accidente cerebrovascular'
    );
    return [
      {
        name: 'Pacientes con DM2',
        liraglutideNLifeStyleModification: diabetesWLiraglutideTable,
        lifeStyleModification: diabetesTable,
      },
      {
        name: 'Pacientes con enfermedad coronaria',
        liraglutideNLifeStyleModification: coronaryWLiraglutideTable,
        lifeStyleModification: coronaryTable,
      },
      {
        name: 'Pacientes con accidente cerebrovascular',
        liraglutideNLifeStyleModification: cerebroVascularWLiraglutideTable,
        lifeStyleModification: cerebroVascularTable,
      },
    ];
  });

  getTable(
    initialArr: TNumber5,
    prob: 'obesityWLiraglutideProbs' | 'obesityProbs',
    times: number
  ): TNumber5[] {
    let rows: TNumber5[] = [initialArr];
    for (let ix = 0; ix < times; ix++) {
      /*
          Get the rows of the table one by one
          Observe that the function probsDeconstruct is called with the current row
        */
      let prevRow = rows[ix];
      let newRow = [];
      for (let i = 0; i < 5; i++) {
        let probsRow = this.probsDeconstruct(i, prob);
        let mm = this._sharedService.multiplyMatrices({
          row: probsRow,
          column: prevRow,
        });
        newRow.push(mm);
      }
      rows.push(newRow as TNumber5);
    }
    return rows;
  }

  convertTable(
    table: TNumber5[],
    disease: 'Diabetes' | 'Enfermedad coronaria' | 'Accidente cerebrovascular'
  ): TNumber10 {
    /* Prune Table */
    let selectedDisease:
      | TProb<TProb3<TDiseaseProbs>, TDiseaseProbs>
      | undefined = this.config$().diseaseProbs.find((d) => {
      return d.name === disease;
    });
    if (selectedDisease === undefined) {
      throw new Error('Disease not found');
    }
    if (selectedDisease.type === 'value') {
      throw new Error('Disease not found');
    }
    let selectedDiseaseProbs: TNumber3 = selectedDisease.probs.map((p) => {
      return p.type === 'value' ? p.value : 0;
    }) as TNumber3;

    let reduceTable: TNumber3[] = table.map((row: TNumber5): TNumber3 => {
      return [row[0], row[1], row[2]];
    });
    let convertedTable: TNumber3[] = reduceTable.map(
      (row: TNumber3): TNumber3 => {
        return [
          row[0] * (selectedDiseaseProbs[0] / 100),
          row[1] * (selectedDiseaseProbs[1] / 100),
          row[2] * (selectedDiseaseProbs[2] / 100),
        ];
      }
    );
    let summedTable: TNumber10 = convertedTable.map((row) => {
      return row.reduce((acc: number, curr: number) => acc + curr, 0);
    }) as TNumber10;
    for (let i = 1; i < 10; i++) {
      summedTable[i] = summedTable[i] + summedTable[i - 1];
    }
    return summedTable.map((v) => Math.round(v)) as TNumber10;
  }

  probsDeconstruct(
    selection: number,
    prob: 'obesityWLiraglutideProbs' | 'obesityProbs'
  ): TNumber5 {
    let selectedProb = this.config$()[prob][selection];
    if (selectedProb.type === 'value') {
      return [selectedProb.value, 0, 0, 0, 0];
    } else {
      let selectedProbConverted: TNumber5 = selectedProb.probs?.map(
        (p: TProb<TProb5<TObesityProbs>, TObesityProbs>) => {
          return p.type === 'value' ? p.value / 100 : 0;
        }
      ) as TNumber5;
      return selectedProbConverted;
    }
  }
}
