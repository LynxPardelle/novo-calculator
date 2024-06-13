import {
  computed,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { TConfig } from '../types/config.type';
import { config } from './data/config.data';
import { TCalculatorData } from '../types/calculatorData.type';
import { calculatorData } from './data/calculatorData.data';
import { SharedService } from '../../shared/services/shared.service';

export type TPatientsDetails = {
  liraglutideNLifeStyleModification: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
  lifeStyleModification: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
};
@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  public config$: Signal<TConfig> = signal<TConfig>(config);
  public calculatorData$: WritableSignal<TCalculatorData> =
    signal<TCalculatorData>(calculatorData);

  public comput = computed(() => {
    const newCalculatorData = this.calculatorData$();
    console.log('computing', newCalculatorData);
    return newCalculatorData;
  });
  constructor(private _sharedService: SharedService) {}

  getDiabetesDetails(): TPatientsDetails {
    /*
    X21 = this._sharedService.multiplyMatrices({
      row: [U7, U8, U9, U10, U11],
      column: [X20, Y20, Z20, AA20, AB20],
    });
    Y21 = this._sharedService.multiplyMatrices({
      row: [V7, V8, V9, V10, V11],
      column: [X20, Y20, Z20, AA20, AB20],
    });
    Z21 = this._sharedService.multiplyMatrices({
      row: [W7, W8, W9, W10, W11],
      column: [X20, Y20, Z20, AA20, AB20],
    });
    AA21 = this._sharedService.multiplyMatrices({
      row: [X7, X8, X9, X10, X11],
      column: [X20, Y20, Z20, AA20, AB20],
    });
    AB21 = this._sharedService.multiplyMatrices({
      row: [Y7, Y8, Y9, Y10, Y11],
      column: [X20, Y20, Z20, AA20, AB20],
    });
    // XAB21 = func(arg): [X21, Y21, Z21, AA21, AB21]
    X22 = this._sharedService.multiplyMatrices({
      row: [U7, U8, U9, U10, U11],
      column: [X21, Y21, Z21, AA21, AB21],
    });
    Y22 = this._sharedService.multiplyMatrices({
      row: [V7, V8, V9, V10, V11],
      column: [X21, Y21, Z21, AA21, AB21],
    });
    Z22 = this._sharedService.multiplyMatrices({
      row: [W7, W8, W9, W10, W11],
      column: [X21, Y21, Z21, AA21, AB21],
    });
    AA22 = this._sharedService.multiplyMatrices({
      row: [X7, X8, X9, X10, X11],
      column: [X21, Y21, Z21, AA21, AB21],
    });
    AB22 = this._sharedService.multiplyMatrices({
      row: [Y7, Y8, Y9, Y10, Y11],
      column: [X21, Y21, Z21, AA21, AB21],
    });
    ...
    */
    /*
    X55 = X21*B6
    Y55 = Y21*C6
    Z55 = Z21*D6
    X56 = X22*B6
    Y56 = Y22*C6
    Z56 = Z22*D6
    ...
    */
    /*
    X67 = X21*B7
    Y67 = Y21*C7
    Z67 = Z21*D7
    X68 = X22*B7
    Y68 = Y22*C7
    Z68 = Z22*D7
    ...
    */
    /*
    X79 = X21*B8
    Y79 = Y21*C8
    Z79 = Z21*D8
    X80 = X22*B8
    Y80 = Y22*C8
    Z80 = Z22*D8
    ...
    */
    /*
    diabetes = {
    X: [X55, X56, X57, X58, X59, X60, X61, X62, X63, X64],
    Y: [Y55, Y56, Y57, Y58, Y59, Y60, Y61, Y62, Y63, Y64],
    Z: [Z55, Z56, Z57, Z58, Z59, Z60, Z61, Z62, Z63, Z64],
    }
    */
    /*
    coronaria = {
    X: [X67, X68, X69, X70, X71, X72, X73, X74, X75, X76],
    Y: [Y67, Y68, Y69, Y70, Y71, Y72, Y73, Y74, Y75, Y76],
    Z: [Z67, Z68, Z69, Z70, Z71, Z72, Z73, Z74, Z75, Z76],
    }
    */
    /*
    cerebroVascular = {
    X: [X79, X80, X81, X82, X83, X84, X85, X86, X87, X88],
    Y: [Y79, Y80, Y81, Y82, Y83, Y84, Y85, Y86, Y87, Y88],
    Z: [Z79, Z80, Z81, Z82, Z83, Z84, Z85, Z86, Z87, Z88],
    }
    */
    /*
    let acumuladosDiabetes = diabetes.map((element, i) => {
      return element.X[i] + element.Y[i] + element.Z[i]
    });
    let acumuladosCoronaria = coronaria.map((element, i) => {
      return element.X[i] + element.Y[i] + element.Z[i]
    });
    let acumuladosCerebroVascular = cerebroVascular.map((element, i) => {
      return element.X[i] + element.Y[i] + element.Z[i]
    });
    */
    return {
      liraglutideNLifeStyleModification: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      lifeStyleModification: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
  }
}
