import { TestBed } from '@angular/core/testing';

import { EmployaddService } from './employadd.service';

describe('EmployaddService', () => {
  let service: EmployaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
