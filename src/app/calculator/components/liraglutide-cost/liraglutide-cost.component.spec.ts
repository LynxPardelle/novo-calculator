import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiraglutideCostComponent } from './liraglutide-cost.component';

describe('LiraglutideCostComponent', () => {
  let component: LiraglutideCostComponent;
  let fixture: ComponentFixture<LiraglutideCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiraglutideCostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiraglutideCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
