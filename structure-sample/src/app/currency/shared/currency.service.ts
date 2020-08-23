import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { Currency } from './currency.model';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(private httpClient: HttpClient) {

  }

  // getCurrencies(): Observable<Currency[]> {
  //   let getCurrenciesUrl = `${environment.api_url}/Currency/currencies`;
  //   return this.httpClient.get(getCurrenciesUrl);
  // }
  getCurrencies() {
    let getCurrenciesUrl = `${environment.api_url}/api/Currency/getCurrencies`;
    return this.httpClient.get(getCurrenciesUrl);
  }

}
