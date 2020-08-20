import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable } from 'rxjs/internal/Observable';
import { environment } from "../../../environments/environment";

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient) { }

  // get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
  //   return this.http.get(`${environment.api_url}${path}`, { params })
  //     .map((res: Response) => {
  //       res.json();
  //     })
  // }
}
