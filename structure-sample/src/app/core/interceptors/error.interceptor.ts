
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BadInput, NotFoundError } from '../models/errors';

export class ErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {

          if (error.status === 400)
            return throwError(new BadInput(error));
          else if (error.status === 404)
            return throwError(new NotFoundError(error));

          //ToDo toast message
          alert('An unexpected error occured.')
          console.log(error);
        }));
  }

}
