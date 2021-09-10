import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AngularLibModule, CircleProgressModule } from 'lib-angular/dist/angular-lib';

import { DashboardService } from './service/dashboard.service';
import { DashboardFactoryService } from './service/dashboard.factory.service';

import { DashboardComponent } from './dashboard.component';
import { Observable } from 'rxjs';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        HttpClientModule,
        AngularLibModule,
        CircleProgressModule,
      ],
      providers: [
        DashboardService,
        DashboardFactoryService
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to call the getMetrics() in ngOnInit()', () => {
    const dashboardServiceSpy = spyOn(component.dashboardService, 'getMetrics').and.callThrough();

    component.ngOnInit();

    expect(dashboardServiceSpy).toHaveBeenCalled();
  });

  it('should to call the getMetricsFactory() in ngOnInit()', () => {
    const response = new Observable<object>(observer => {
      observer.next({
        status: 400,
        body: {}
      })
    });

    spyOn(component.dashboardService, 'getMetrics').and.returnValue(response);


    const dashboardFactoryServiceSpy = spyOn(component.dashboardFactoryService, 'getMetricsFactory').and.callThrough();

    component.ngOnInit();

    expect(dashboardFactoryServiceSpy).toHaveBeenCalled();
  });

  it('should to return the call the getMetrics() with error in ngOnInit()', () => {
    const response = new Observable<object>(observer => {
      observer.next(
        Observable.throw({
          status: 500,
        })
      )
    });

    spyOn(component.dashboardService, 'getMetrics').and.returnValue(response);


    const dashboardFactoryServiceSpy = spyOn(component.dashboardFactoryService, 'getMetricsFactory').and.callThrough();

    component.ngOnInit();

    expect(dashboardFactoryServiceSpy).toHaveBeenCalled();
  });


});
