import { TestBed } from '@angular/core/testing';

import { BackendMarketService } from './backend-market.service';

describe('BackendMarketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendMarketService = TestBed.get(BackendMarketService);
    expect(service).toBeTruthy();
  });
});
