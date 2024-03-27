import { TestBed } from '@angular/core/testing';

import { StatuscarService } from './statuscar.service';

describe('StatuscarService', () => {
  let service: StatuscarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatuscarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
