import { TestBed } from '@angular/core/testing';

import { ReparticionService } from './reparticion.service';

describe('ReparticionService', () => {
  let service: ReparticionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReparticionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
