import { JsonPipe } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';
import { ExistDirective } from '../../directives/exists.directive';

@Component({
  selector: 'generic-people-chart',
  standalone: true,
  imports: [JsonPipe, ExistDirective],
  templateUrl: './generic-people-chart.component.html',
  styleUrl: './generic-people-chart.component.scss',
})
export class GenericPeopleChartComponent {
  @Input() chartData!: {
    name: string;
    series: { name: string; value: string }[];
  }[];
  public people: {
    height: string;
    width: string;
    value: number;
  }[] = [];
  public maxNumber: number = 1;

  constructor(private _bef: NgxBootstrapExpandedFeaturesService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData']) {
      this.getPeople();
    }
  }

  public getPeople(): void {
    console.log('chartData', this.chartData);
    let peopleAll: number[] = [];
    let people1: number[] = this.chartData[0].series.map((el) => +el.value);
    let people2: number[] = this.chartData[1].series.map((el) => +el.value);
    for (let i = 0; i < people1.length; i++) {
      peopleAll.push(people1[i]);
      peopleAll.push(people2[i]);
    }
    peopleAll.forEach((el) => {
      if (el > this.maxNumber) {
        this.maxNumber = el;
      }
    });
    console.log('peopleAll', peopleAll);
    this.people = peopleAll.map((el) => {
      /* Sacar porcentaje de el con respecto a this.maxNumber */
      console.log('el', el);
      console.log('this.maxNumber', this.maxNumber);
      let percentageCalculation = (100 / this.maxNumber) * el;
      console.log('percentageCalculation', percentageCalculation);
      let percentageMissing = (100 - percentageCalculation) / 1.5;
      console.log('percentageMissing', percentageMissing);
      let elHeight = 200 - percentageMissing * 2;
      elHeight = elHeight < 0 ? 0 : elHeight;
      console.log('elHeight', elHeight);
      let elWidth = 113.05 - percentageMissing * 1.1305;
      elWidth = elWidth < 0 ? 0 : elWidth;
      console.log('elWidth', elWidth);
      return {
        height: this.befysize(elHeight),
        width: this.befysize(elWidth),
        value: el,
      };
    });
    console.log('this.people', this.people);
  }

  befysize(val: number | string): string {
    return this._bef.befysize(typeof val === 'string' ? val : '' + val);
  }
  cssCreate() {
    this._bef.cssCreate();
  }
}
