import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Currency } from '../shared/currency.model';
import { CurrencyService } from '../shared/currency.service';
import { CurrencyAddComponent } from './currency-add.component';

describe('CurrencyAddComponent', () => {
  let component: CurrencyAddComponent;
  let fixture: ComponentFixture<CurrencyAddComponent>;
  let currencyServiceStub: Partial<CurrencyService>;
  let router: Router;

  currencyServiceStub = {
    getCurrencies() {
      return of([new Currency()]);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyAddComponent ],
      providers: [ { provide: CurrencyService, useValue: currencyServiceStub } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
