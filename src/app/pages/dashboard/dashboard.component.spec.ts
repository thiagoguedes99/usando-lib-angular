import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AngularLibModule, CircleProgressModule } from 'lib-angular/dist/angular-lib';

import { DashboardService } from './service/dashboard.service';
import { DashboardFactoryService } from './service/dashboard.factory.service';

import { DashboardComponent } from './dashboard.component';
import { Observable, of } from 'rxjs';


fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  // let dashboardServiceSpy: { getMetrics: returnValue(of()) };
  let dashboardServiceSpy: any;
  // let dashboardServiceSpy: DashboardService;

  beforeEach(async () => {

    dashboardServiceSpy = jasmine.createSpyObj('DashboardService', ['getMetrics']);

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        HttpClientTestingModule,
        AngularLibModule,
        CircleProgressModule,
      ],
      providers: [
        {provide: DashboardService, useValue: dashboardServiceSpy},
        // DashboardService,
        DashboardFactoryService
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    dashboardServiceSpy.getMetrics.and.returnValue( of() );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to call the getMetrics() in ngOnInit()', () => {

    // const response = new Observable<object>(observer => {
    //   observer.next(
    //     Observable.throw({
    //       status: 500,
    //     })
    //   );
    // });

    // dashboardServiceSpy.getMetrics = new Observable<object>(observer => {
    //   observer.next(
    //     Observable.throw({
    //       status: 500,
    //     })
    //   );
    // });

    // spyOn(dashboardServiceSpy, 'getMetrics').and.returnValue(response);


    // const dashboardServiceSpy2 = spyOn(dashboardServiceSpy, 'getMetrics').and.callThrough();

    // dashboardServiceSpy.getMetrics = null;
    // dashboardServiceSpy.getMetrics.and.returnValue( of() );


    // component.ngOnInit();

    // expect(dashboardServiceSpy.getMetrics).toHaveBeenCalled();
    expect(dashboardServiceSpy.getMetrics).toHaveBeenCalledTimes(1);

    // expect(dashboardServiceSpy2.getMetrics).toHaveBeenCalled();
    // expect(dashboardServiceSpy2.getMetrics).toHaveBeenCalledTimes(1);
  });

  // it('should to call the getMetrics() in ngOnInit()', () => {
  //   const dashboardServiceSpy = spyOn(component.dashboardService, 'getMetrics').and.callThrough();

  //   component.ngOnInit();

  //   expect(dashboardServiceSpy).toHaveBeenCalled();
  // });

  // it('should to call the getMetricsFactory() in ngOnInit()', () => {
  //   const response = new Observable<object>(observer => {
  //     observer.next({
  //       status: 400,
  //       body: {}
  //     })
  //   });

  //   spyOn(component.dashboardService, 'getMetrics').and.returnValue(response);


  //   const dashboardFactoryServiceSpy = spyOn(component.dashboardFactoryService, 'getMetricsFactory').and.callThrough();

  //   component.ngOnInit();

  //   expect(dashboardFactoryServiceSpy).toHaveBeenCalled();
  // });

  // it('should to return the call the getMetrics() with error in ngOnInit()', () => {
  //   const response = new Observable<object>(observer => {
  //     observer.next(
  //       Observable.throw({
  //         status: 500,
  //       })
  //     )
  //   });

  //   spyOn(component.dashboardService, 'getMetrics').and.returnValue(response);


  //   const dashboardFactoryServiceSpy = spyOn(component.dashboardFactoryService, 'getMetricsFactory').and.callThrough();

  //   component.ngOnInit();

  //   expect(dashboardFactoryServiceSpy).toHaveBeenCalled();
  // });


});
