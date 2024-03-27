import { TestBed } from '@angular/core/testing';

import { ViewStatuscarService } from './view-statuscar.service';

describe('ViewStatuscarService', () => {
  let service: ViewStatuscarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewStatuscarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
