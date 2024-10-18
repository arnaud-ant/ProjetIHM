import { TestBed } from '@angular/core/testing';

import { OrderConfigService } from './order-config.service';

describe('OrderConfigService', () => {
  let service: OrderConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
