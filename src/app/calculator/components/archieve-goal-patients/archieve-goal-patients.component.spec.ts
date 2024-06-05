import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchieveGoalPatientsComponent } from './archieve-goal-patients.component';

describe('ArchieveGoalPatientsComponent', () => {
  let component: ArchieveGoalPatientsComponent;
  let fixture: ComponentFixture<ArchieveGoalPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchieveGoalPatientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchieveGoalPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
