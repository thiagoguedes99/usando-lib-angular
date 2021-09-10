import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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

  // DOTO: vai deletar
  percent = 53

  constructor(
    public dashboardService: DashboardService,
    public dashboardFactoryService: DashboardFactoryService
  ) {}

  ngOnInit(): void {
    this.dashboardService.getMetrics().subscribe(resp => {
      console.log('getMetrics')
      console.log(resp)
      console.log('DashboardFactoryService')
      console.log(this.dashboardFactoryService.getMetricsFactory(resp))
      this.dashboard = this.dashboardFactoryService.getMetricsFactory(resp)
      console.log(this.dashboard)
    },
    error => {
      this.dashboard = this.dashboardFactoryService.getMetricsFactory(error)
    })

  }

}
