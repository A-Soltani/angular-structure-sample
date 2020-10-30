
// import { AppError, BadInput, NotFoundError } from "../../shared";
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Currency } from './currency.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  url = `${environment.api_url}/api/Currency`;
  constructor(private http: HttpClient) { }

  getCurrencies() {
    let getCurrenciesUrl = `${this.url}/getCurrencies`;
    return this.http.get<Currency[]>(getCurrenciesUrl);
  }

  addCurrency(currency: Currency): Observable<number> {
    return this.http.post<number>(`${this.url}/addCurrency`, currency)
      // .pipe(
      //   catchError((error: HttpErrorResponse) => {
      //     if (error.status === 400)
      //       return throwError(new BadInput(error));
      //   })
      // );
  }

  updateCurrency(currency: Currency): Observable<Currency> {
    return this.http.put<Currency>(`${this.url}/updateCurrency`, currency)
      // .pipe(
      //   catchError((error: HttpErrorResponse) => {
      //     if (error.status === 400)
      //       return throwError(new BadInput(error));
      //     else if (error.status === 404)
      //       return throwError(new NotFoundError(error));
      //   })
      // );
  }

  getCurrency(id: number): Observable<Currency> {
    return this.http.get<Currency>(`${this.url}/getCurrency/${id}`);
  }

  deleteCurrency(id: number): Observable<Currency> {
    return this.http.delete<Currency>(`${this.url}/deleteCurrency/${id}`);
  }


}

