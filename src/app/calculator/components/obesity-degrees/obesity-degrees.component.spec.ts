import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObesityDegreesComponent } from './obesity-degrees.component';

describe('ObesityDegreesComponent', () => {
  let component: ObesityDegreesComponent;
  let fixture: ComponentFixture<ObesityDegreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObesityDegreesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObesityDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
