import { TestBed } from '@angular/core/testing';

import { Dashboard.FactoryService } from './dashboard.factory.service';

describe('Dashboard.FactoryService', () => {
  let service: Dashboard.FactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dashboard.FactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
