import { CurrencyService } from './../shared/currency.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CurrencyListComponent } from './currency-list.component';
import { from, Observable } from 'rxjs';
import { Currency } from '../shared/currency.model';

describe('CurrencyListComponent', () => {
  let component: CurrencyListComponent;
  let service: CurrencyService;
  let fixture: ComponentFixture<CurrencyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyListComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = new CurrencyService(null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set currencies property with items returned ther service', () => {
    let currencies = [new Currency()];

    spyOn(service, 'getCurrencies').and.callFake(() => {
      return from([currencies]);
    });

    component.ngOnInit();

    expect(component.currencies).toBe(currencies);
  });
});
