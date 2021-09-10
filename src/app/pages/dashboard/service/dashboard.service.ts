import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  public getMetrics() {
    // return this.http.get(`${environment.API_BACKEND}/dashboard` )

    return new Observable<object>(observer => {
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
              date: '2021-09-01',
              value: 5,
            },
            {
              date: '2021-09-02',
              value: 10,
            },
            {
              date: '2021-09-05',
              value: 15,
            },
            {
              date: '2021-09-07',
              value: 20,
            },
            {
              date: '2021-09-09',
              value: 25,
            },
            {
              date: '2021-09-15',
              value: 30,
            },
            {
              date: '2021-09-20',
              value: 35,
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
            }
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
