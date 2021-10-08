import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FuctionsService } from 'lib-angular/dist/angular-lib';

import variablesStyle from '../../../assets/sass/utils/variables';
import { DashboardService } from './service/dashboard.service';
import { DashboardFactoryService } from './service/dashboard.factory.service';
import { DashboardModel } from './model/dashboard';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  variablesStyle = variablesStyle;
  dashboard: DashboardModel

  chartDonutHeight: string = ''

  constructor(
    public dashboardService: DashboardService,
    public dashboardFactoryService: DashboardFactoryService,
    public fuctionsService: FuctionsService
  ) {
    this.chartDonutHeight = fuctionsService.isMobile() ? '100%' : '310'
  }

  ngOnInit(): void {
    this.dashboardService.getMetrics().subscribe(resp => {
      this.dashboard = this.dashboardFactoryService.getMetricsFactory(resp) ;
    },
    error => {
      this.dashboard = this.dashboardFactoryService.getMetricsFactory(error)
    })

  }

}
