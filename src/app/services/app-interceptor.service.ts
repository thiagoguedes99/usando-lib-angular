import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService implements HttpInterceptor {

  constructor() { }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {

    const request = req.clone({
      setHeaders: {
        Authorization: 'Bearer JWT_token_aqui'
      }
     });

     return next.handle(request)
                .pipe(
                  catchError(this.handleError)
                )
  }
}
