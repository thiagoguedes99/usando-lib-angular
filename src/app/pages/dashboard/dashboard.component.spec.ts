import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AngularLibModule, CircleProgressModule } from 'lib-angular/dist/angular-lib';

import { DashboardService } from './service/dashboard.service';
import { DashboardFactoryService } from './service/dashboard.factory.service';

import { DashboardComponent } from './dashboard.component';
import { Observable, of } from 'rxjs';

// class SomeService {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   // getData(): Observable<any> {return};
//   getObservable: () => { return {subscribe: () => {}}; }
// }

const serviceStub = {
  getMetrics: () => { return { subscribe: () => ({ }) }; },
};

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  // let dashboardServiceSpy: { getMetrics: returnValue(of()) };
  let dashboardServiceSpy: any;
  // let dashboardServiceSpy: DashboardService;

  beforeEach(async () => {

    // dashboardServiceSpy = jasmine.createSpyObj('DashboardService', ['getMetrics']);
    // const dashboardServiceSpyinter = jasmine.createSpyObj('DashboardService', ['getMetrics']);

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        HttpClientTestingModule,
        AngularLibModule,
        CircleProgressModule,
      ],
      providers: [
        // {provide: DashboardService, useValue: dashboardServiceSpyinter},
        {provide: DashboardService, useValue: serviceStub},
        // DashboardService,
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
    const testStub = spyOn(serviceStub, 'getMetrics').and.callThrough();

    component.ngOnInit();

    expect(testStub).toHaveBeenCalled();
    expect(testStub).toHaveBeenCalledTimes(1);
  });

  it('should to call the getMetrics() in ngOnInit()', () => {
    // const dashboardServiceSpy = spyOn(component.dashboardService, 'getMetrics').and.callThrough();
    const dashboardServiceSpy = spyOn(serviceStub, 'getMetrics').and.callThrough();

    component.ngOnInit();

    expect(dashboardServiceSpy).toHaveBeenCalled();
  });

  it('should to call the getMetricsFactory() in ngOnInit()', () => {
    const response = new Observable<object>(observer => {
      observer.next({
        status: 400,
        body: {}
      });
    });

    spyOn(serviceStub, 'getMetrics').and.returnValue(response);


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

    // spyOn(component.dashboardService, 'getMetrics').and.returnValue(response);
    spyOn(serviceStub, 'getMetrics').and.returnValue(response);


    const dashboardFactoryServiceSpy = spyOn(component.dashboardFactoryService, 'getMetricsFactory').and.callThrough();

    component.ngOnInit();

    expect(dashboardFactoryServiceSpy).toHaveBeenCalled();
  });


});
