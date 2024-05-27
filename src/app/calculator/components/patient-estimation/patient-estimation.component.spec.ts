import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEstimationComponent } from './patient-estimation.component';

describe('PatientEstimationComponent', () => {
  let component: PatientEstimationComponent;
  let fixture: ComponentFixture<PatientEstimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientEstimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
