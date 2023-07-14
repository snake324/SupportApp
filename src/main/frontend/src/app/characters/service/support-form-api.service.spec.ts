import { TestBed } from '@angular/core/testing';

import { SupportFormApiService } from './support-form-api.service';

describe('SupportFormApiService', () => {
  let service: SupportFormApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportFormApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
