import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { DashboardModelResponse, DashboardModelResponseMock } from '../model/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  public getMetrics() {
    // return this.http.get<DashboardModelResponse>(`${environment.API_BACKEND}/dashboard` )

    // return new Observable<DashboardModelResponseMock>(observer => {
    return new Observable<any>(observer => {
      setTimeout(() =>
        observer.next({
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
                date: '2019-01-01',
                value: 5,
              },
              {
                date: '2019-02-01',
                value: 3,
              },
              {
                date: '2019-10-01',
                value: 7,
              },
              {
                date: '2019-12-01',
                value: 10,
              },
              {
                date: '2020-01-10',
                value: 5,
              },
              {
                date: '2020-02-15',
                value: 30,
              },
              {
                date: '2020-05-01',
                value: 1,
              },
              {
                date: '2020-06-01',
                value: 10,
              },
              {
                date: '2020-07-19',
                value: 40,
              },
              {
                date: '2020-08-01',
                value: 60,
              },
              {
                date: '2020-09-23',
                value: 15,
              },
              {
                date: '2020-11-01',
                value: 30,
              },
              {
                date: '2020-12-01',
                value: 2,
              },
              {
                date: '2021-02-02',
                value: 19,
              },
              {
                date: '2021-04-05',
                value: 28,
              },
              {
                date: '2021-06-07',
                value: 33,
              },
              {
                date: '2021-10-09',
                value: 50,
              }
            ],
            acronyms_affected: [
              {
                acronyms: 'abc',
                score: 0.4
              },
              {
                acronyms: 'def',
                score: 0.8
              },
              {
                acronyms: 'ghi',
                score: 0.6
              },
              {
                acronyms: 'jkl',
                score: 0.1
              },
              {
                acronyms: 'mno',
                score: 0.2
              },
              {
                acronyms: 'pqr',
                score: 0.3
              },
              {
                acronyms: 'stu',
                score: 0.4
              },
              {
                acronyms: 'vxw',
                score: 0.5
              },
              {
                acronyms: 'yzz',
                score: 0.6
              },
            ],
            technical_debts: {
              low: 65,
              medium: 25,
              critical: 45,
            },
          }
       
        }), 1000);
    });
  }
}
