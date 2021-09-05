import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  myThead = [
    'Sigla',
    'Score',
  ]

  myBody = [
    ['ABC', '0.2'],
    ['ABC', '0.2'],
    ['ABC', '0.2'],
  ]

  fix = { marginBottom: '32px', position: 'sticky', top: '10px' }

  chartHeight = { height: '266px' }

  percent = 53
  isHorizontal = true
  isYLegend = true
  dataChart = [
    {
      name: 'Excelência operacional',
      data: '55',
      color: '#33A49D'
    },
    {
      name: 'Segurança',
      data: '73',
      color: '#FF008A'
    },
    {
      name: 'Confiabilidade',
      data: '97',
      color: '#6A3E3E'
    },
    {
      name: 'Eficiência performance',
      data: '97',
      color: '#6A3E3E'
    },
    {
      name: 'Otimização custos',
      data: '97',
      color: '#6A3E3E'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
