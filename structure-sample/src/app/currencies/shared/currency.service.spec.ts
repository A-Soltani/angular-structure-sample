import { HttpClient } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CurrencyService } from "./currency.service";

describe('CurrencyService', () => {
  let httpClient: HttpClient;
  let currencyService: CurrencyService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyService]
    });

    httpClient = TestBed.inject(HttpClient);
    currencyService = TestBed.inject(CurrencyService);
  })

  it('should create Currency Service', () => {
    expect(currencyService).toBeTruthy();
  });

});
