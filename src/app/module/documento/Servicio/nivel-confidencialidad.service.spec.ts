import { TestBed } from '@angular/core/testing';

import { NivelConfidencialidadService } from './nivel-confidencialidad.service';

describe('NivelConfidencialidadService', () => {
  let service: NivelConfidencialidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NivelConfidencialidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
