import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentCostComponent } from './treatment-cost.component';

describe('TreatmentCostComponent', () => {
  let component: TreatmentCostComponent;
  let fixture: ComponentFixture<TreatmentCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreatmentCostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreatmentCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
