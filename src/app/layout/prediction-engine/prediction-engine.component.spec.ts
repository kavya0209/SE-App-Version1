import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionEngineComponent } from './prediction-engine.component';

describe('PredictionEngineComponent', () => {
  let component: PredictionEngineComponent;
  let fixture: ComponentFixture<PredictionEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
