import { BadInput } from './../../shared/models/errors/bad-input';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs'

export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    return throwError(new BadInput(error));
  }
}
