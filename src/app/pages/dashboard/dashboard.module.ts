import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AngularLibModule, CircleProgressModule } from 'lib-angular/dist/angular-lib';

import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './service/dashboard.service';
import { DashboardFactoryService } from './service/dashboard.factory.service';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularLibModule,
    CircleProgressModule,
  ],
  providers: [
    DashboardService,
    DashboardFactoryService
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
