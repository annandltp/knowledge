import { TestBed } from '@angular/core/testing';

import { KmformService } from './kmform.service';

describe('KmformService', () => {
  let service: KmformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KmformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
