import { TestBed } from '@angular/core/testing';

import { FinancialProductsService } from './financial-products.service';

describe('FinancialProductsServiceService', () => {
  let service: FinancialProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
