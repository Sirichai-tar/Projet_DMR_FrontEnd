import { TestBed } from '@angular/core/testing';

import { CarregisService } from './carregis.service';

describe('CarregisService', () => {
  let service: CarregisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarregisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
