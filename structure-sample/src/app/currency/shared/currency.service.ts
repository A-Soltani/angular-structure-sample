import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Currency } from './currency.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {

  }

  getCurrencies(): Observable<Currency[]> {
    let getCurrenciesUrl = `${environment.api_url}/api/Currency/getCurrencies`;
    return this.http.get<Currency[]>(getCurrenciesUrl);
  }

  addCurrency(currency: Currency) {
    console.log(`adding ${currency}`)
    return this.http.post(`${environment.api_url}/api/Currency/addCurrency`, currency);
  }

  getCurrency(id: number): Observable<Currency> {
    return this.http.get<Currency>(`${environment.api_url}/api/Currency/getCurrency/${id}`)
  }




}

