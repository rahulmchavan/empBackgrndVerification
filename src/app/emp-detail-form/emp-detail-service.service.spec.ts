import { TestBed } from '@angular/core/testing';

import { EmpDetailServiceService } from './emp-detail-service.service';

describe('EmpDetailServiceService', () => {
  let service: EmpDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
