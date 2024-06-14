import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPeopleChartComponent } from './generic-people-chart.component';

describe('GenericPeopleChartComponent', () => {
  let component: GenericPeopleChartComponent;
  let fixture: ComponentFixture<GenericPeopleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericPeopleChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericPeopleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
