import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualTreatmentCostComponent } from './anual-treatment-cost.component';

describe('AnualTreatmentCostComponent', () => {
  let component: AnualTreatmentCostComponent;
  let fixture: ComponentFixture<AnualTreatmentCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnualTreatmentCostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnualTreatmentCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
