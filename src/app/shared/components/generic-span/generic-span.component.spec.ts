import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericSpanComponent } from './generic-span.component';

describe('GenericSpanComponent', () => {
  let component: GenericSpanComponent;
  let fixture: ComponentFixture<GenericSpanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericSpanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
