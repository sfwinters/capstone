import { TestBed } from '@angular/core/testing';

import { KshipsService } from './kships.service';

describe('KshipsService', () => {
  let service: KshipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KshipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
