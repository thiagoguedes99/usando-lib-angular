import { TestBed } from '@angular/core/testing';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Observable } from 'rxjs';

import { DashboardService } from './dashboard.service';

// xdescribe('DashboardService', () => {
// fdescribe('DashboardService', () => {
describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // HttpClientModule,
        HttpClientTestingModule
      ],
    });

    service = TestBed.inject(DashboardService);
  });

  // xit('should be created', () => {
  // fit('should be created', () => {
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validar if getMetrics to be a Function', () => {
    expect(typeof service.getMetrics).toBe('function');
  });

  it('should return a Observable', () => {
    service.getMetrics().subscribe(resp => {
      expect(resp).toEqual(Observable);
    });
  });

});
