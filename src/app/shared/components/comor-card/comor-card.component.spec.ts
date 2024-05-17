import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComorCardComponent } from './comor-card.component';

describe('ComorCardComponent', () => {
  let component: ComorCardComponent;
  let fixture: ComponentFixture<ComorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComorCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
