import { TestBed } from '@angular/core/testing';

import { TableStatuscar } from './table-statuscar.service';

describe('TableStatuscarService', () => {
  let service: TableStatuscar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableStatuscar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
