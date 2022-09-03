import { TestBed } from '@angular/core/testing';

import { LancementserviceService } from './lancementservice.service';

describe('LancementserviceService', () => {
  let service: LancementserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LancementserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
