import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DashboardFactoryService } from './dashboard.factory.service';
import { DashboardModelFactory } from '../model/dashboard';

describe('Dashboard.FactoryService', () => {
  let service: DashboardFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    });
    service = TestBed.inject(DashboardFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrun the value validate in the factory', () => {
    const mockResponse = {
      status: 200,
      body: {
        prr: {
          value: 59,
          operational_excellence: 60,
          safety: 20,
          reliability: 55,
          performance_efficiency: 30,
          cost_optimization: 80,
        },
        risk: {
          low: 60,
          medium: 20,
          critical: 40,
        },
        score_history: [
          {
            date: '2021-09-01',
            value: 5,
          },
        ],
        acronyms_affected: [
          {
            acronyms: 'abc',
            score: 0.4
          },
        ],
        technical_debts: {
          low: 65,
          medium: 25,
          critical: 45,
        },
      }
    };

    const mockFactory: DashboardModelFactory = {
      prr: {
        value: 59,
        chart: [
          {
            name: 'Excelência operacional',
            data: 60,
            color: '#106EB0'
          },
          {
            name: 'Segurança',
            data: 20,
            color: '#B71C1C'
          },
          {
            name: 'Confiabilidade',
            data: 55,
            color: '#106EB0'
          },
          {
            name: 'Eficiência performance',
            data: 30,
            color: '#B71C1C'
          },
          {
            name: 'Otimização custos',
            data: 80,
            color: '#106EB0'
          }
        ]
      },
      risk: [
        {
          name: 'Baixo',
          data: 60,
          color: '#007A47'
        },
        {
          name: 'Médio',
          data: 20,
          color: '#F1AE2F'
        },
        {
          name: 'Critico',
          data: 40,
          color: '#B71C1C'
        }
      ],
      scoreHistory: [
        {
          date: '2021-09-01',
          data: 5
        }
      ],
      acronymsAffected: [
        [ 'abc', 0.4 ]
      ],
      technicalDebts: {
        chart: [
          {
            name: 'Baixo',
            data: 65,
            color: '#007A47'
          },
          {
            name: 'Médio',
            data: 25,
            color: '#F1AE2F'
          },
          {
            name: 'Critico',
            data: 45,
            color: '#B71C1C'
          }
        ],
        low: '65',
        medium: '25',
        critical: '45'
      }
    };

    expect(service.getMetricsFactory(mockResponse)).toEqual(mockFactory);
  });
});
