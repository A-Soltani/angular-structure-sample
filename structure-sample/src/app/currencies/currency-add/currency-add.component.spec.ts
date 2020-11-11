import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CurrencyService } from '../shared/currency.service';

import { CurrencyAddComponent } from './currency-add.component';

describe('CurrencyAddComponent', () => {
  let component: CurrencyAddComponent;
  let fixture: ComponentFixture<CurrencyAddComponent>;
  let currencyService: CurrencyService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyAddComponent ]
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
