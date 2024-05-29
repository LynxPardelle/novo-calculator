import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiraglutideAndLifestyleModificationComponent } from './liraglutide-and-lifestyle-modification.component';

describe('LiraglutideAndLifestyleModificationComponent', () => {
  let component: LiraglutideAndLifestyleModificationComponent;
  let fixture: ComponentFixture<LiraglutideAndLifestyleModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiraglutideAndLifestyleModificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiraglutideAndLifestyleModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
