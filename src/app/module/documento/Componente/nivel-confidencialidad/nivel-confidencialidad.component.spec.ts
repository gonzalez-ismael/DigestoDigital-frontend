import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelConfidencialidadComponent } from './nivel-confidencialidad.component';

describe('NivelConfidencialidadComponent', () => {
  let component: NivelConfidencialidadComponent;
  let fixture: ComponentFixture<NivelConfidencialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelConfidencialidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelConfidencialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
