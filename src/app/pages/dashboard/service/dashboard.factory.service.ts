import { Injectable } from '@angular/core';
import { DashboardModel } from '../model/dashboard';

import variablesStyle from '../../../../assets/sass/utils/variables';

@Injectable({
  providedIn: 'root'
})
export class DashboardFactoryService {

  constructor() { }

  public getMetricsFactory({ status, body }: any): DashboardModel {
    return body && status === 200 ? ({
      prr: {
        value: body?.prr?.value ? Number(body.prr.value) : 0,
        chart: [
          {
            name: 'Excelência operacional',
            data: body?.prr?.operational_excellence ? body.prr.operational_excellence : 0,
            color: body?.prr?.operational_excellence >= 50 ? variablesStyle.blue : variablesStyle.red
          },
          {
            name: 'Segurança',
            data: body?.prr?.safety ? body.prr.safety : 0,
            color: body?.prr?.safety >= 50 ? variablesStyle.blue : variablesStyle.red
          },
          {
            name: 'Confiabilidade',
            data: body?.prr?.reliability ? body.prr.reliability : 0,
            color: body?.prr?.reliability >= 50 ? variablesStyle.blue : variablesStyle.red
          },
          {
            name: 'Eficiência performance',
            data: body?.prr?.performance_efficiency ? body.prr.performance_efficiency : 0,
            color: body?.prr?.performance_efficiency >= 50 ? variablesStyle.blue : variablesStyle.red
          },
          {
            name: 'Otimização custos',
            data: body?.prr?.cost_optimization ? body.prr.cost_optimization : 0,
            color: body?.prr?.cost_optimization >= 50 ? variablesStyle.blue : variablesStyle.red
          }
        ],
      },
      risk: [
        {
          name: 'Baixo',
          data: body?.risk?.low ? body.risk.low : 0,
          color: variablesStyle.green
        },
        {
          name: 'Médio',
          data: body?.risk?.medium ? body.risk.medium : 0,
          color: variablesStyle.yellow
        },
        {
          name: 'Critico',
          data: body?.risk?.critical ? body.risk.critical : 0,
          color: variablesStyle.red
        },
      ],
      scoreHistory: body.score_history.length > 0 ? body.score_history.map((item: {date: string, value: string | number}) => ({
        date: item.date,
        value: item.value,
      })) : [],
      acronymsAffected: body.acronyms_affected.length > 0 ? body.acronyms_affected.map((item: {acronyms: string, score: string | number}) => ([
        item.acronyms,
        item.score
      ])) : [],
      technicalDebts: {
        low: body?.technical_debts?.low ? body.technical_debts.low : 0,
        medium: body?.technical_debts?.medium ? body.technical_debts.medium : 0,
        critical: body?.technical_debts?.critical ? body.technical_debts.critical : 0,
      },
    }) :

    status === 404 ? ({
      error404: true
    }) :

    ({
      error500: true
    })
  }
}
