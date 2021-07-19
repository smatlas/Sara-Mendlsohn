import { TestBed } from '@angular/core/testing';

import { GetEnrollerService } from './get-enroller.service';

describe('GetEnrollerService', () => {
  let service: GetEnrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEnrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
