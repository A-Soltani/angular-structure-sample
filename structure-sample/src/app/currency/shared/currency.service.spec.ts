import { HttpClient } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CurrencyService } from "./currency.service";

describe('CurrencyService', () => {
  let currencyService: CurrencyService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyService]
    });
  })

  it('should create Currency Service', inject([CurrencyService], (service: CurrencyService) => {
    expect(service).toBeTruthy();
  }))
});
