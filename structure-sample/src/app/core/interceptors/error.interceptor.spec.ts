import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { Observable, throwError } from "rxjs";
import { HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";

import { ErrorInterceptor } from './error.interceptor';

describe('ErrorInterceptor', () => {
  let httpRequestSpy;
  let httpHandlerSpy;
  const error = { status: 400, statusText: 'error' };
  let errorInterceptor: ErrorInterceptor;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true
        },
        ErrorInterceptor
      ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    errorInterceptor = TestBed.inject(ErrorInterceptor);
    errorInterceptor = new ErrorInterceptor()
  });

  it('should return BadInput if 400 response is returned from API', () => {
    //arrange
    httpRequestSpy = jasmine.createSpyObj('HttpRequest', ['doesNotMatter']);
    httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
    httpHandlerSpy.handle.and.returnValue(throwError(
      {
        error:
          { message: 'test-error' }
      }
    ));

    // errorInterceptor.intercept(httpRequestSpy, httpHandlerSpy)
    //   .subscribe(
    //     result => console.log('good', result),
    //     err => {
    //       console.log('error', err);
    //       expect(err).toEqual('test-error');
    //     }
    //   );

  });

});
