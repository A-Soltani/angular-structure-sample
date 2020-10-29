import { HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from 'rxjs';

import { CurrencyService } from "./currency.service";
import { Currency } from './currency.model';
import { HttpClient, HttpResponse } from '@angular/common/http';

describe('CurrencyService', () => {
  // let httpClientSpy: { get: jasmine.Spy };
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let currencyService: CurrencyService;

  beforeEach(() => {
    //Configures testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyService]
    });

    // TODO: spy on other methods too
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    // currencyService = new CurrencyService(httpClientSpy as any);

    //Instantaites HttpClient, HttpTestingController and EmployeeService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    currencyService = TestBed.inject(CurrencyService);
  });

  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  it('should create Currency Service', () => {
    expect(currencyService).toBeTruthy();
  });

  // it('should return expected currencies (HttpClient called once)', () => {
  //   const expectedCurrencies: Currency[] =
  //     [new Currency()];

  //   currencyService.getCurrencies().subscribe(
  //     currencies => expect(currencies).toEqual(expectedCurrencies, 'expected currencies'),
  //     fail
  //   );

  //   // getCurrencies should have made one request to get currencies
  //   const req = httpTestingController.expectOne(currencyService.url);
  //   expect(req.request.method).toEqual('GET');
  //   expect(req.request.body).toEqual(expectedCurrencies);


  // });

  it('should add currency and return expected currency id', () => {
    const expectedCurrencyId: number = 123;
    const fakeNewCurrency: Currency = new Currency();

    currencyService.addCurrency(fakeNewCurrency).subscribe(
      currencyId => expect(currencyId).toEqual(expectedCurrencyId, 'expected currency Id'),
      fail
    );

    // addCurrency should have made one request to POST employee
    const req = httpTestingController.expectOne(`${currencyService.url}/addCurrency`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(fakeNewCurrency);

    // Expect server to return the employee after POST
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: fakeNewCurrency });
    req.event(expectedResponse);
  });

  it('should update currency and return expected currency', () => {
    const fakeCurrency: Currency = new Currency();
    currencyService.updateCurrency(fakeCurrency)
      .subscribe(
        currency => expect(currency).toEqual(fakeCurrency, 'expected currency'),
        fail
      );

    const req = httpTestingController.expectOne(`${currencyService.url}/updateCurrency`);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(fakeCurrency);

    const expectedResponse = new HttpResponse({ status: 200, statusText: 'Updated', body: fakeCurrency });
    req.event(expectedResponse);
  });


  // it('should return expected currency (HttpClient called once)', () => {
  //   const expectedCurrency: Currency = new Currency();
  //   const fakeCurrency: Currency = new Currency();

  //   httpClientSpy.get.and.returnValue(of(expectedCurrency));

  //   currencyService.updateCurrency(fakeCurrency).subscribe(
  //     currency => expect(expectedCurrency).toEqual(expectedCurrency, 'expected currency'),
  //     fail
  //   );
  //   expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  // });


  // it('should return an error when the server returns a 404', () => {
  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 404 error',
  //     status: 404,
  //     statusText: 'Not Found'
  //   });

  //   httpClientSpy.get.and.returnValue(of(errorResponse));

  //   currencyService.getCurrencies().subscribe(
  //     currencies => fail('expected an error, not currencies'),
  //     error  => expect(error.message).toContain('test 404 error')
  //   );
  // });



});
