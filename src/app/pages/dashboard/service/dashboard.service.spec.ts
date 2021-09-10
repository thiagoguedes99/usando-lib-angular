import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';

import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    });

    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validar if getMetrics to be a Function', () => {
    expect(typeof service.getMetrics).toBe('function');
  });

  it('should return a Observable', () => {
    service.getMetrics().subscribe(resp => {
      expect(resp).toEqual(Observable);
    })
  });

});
