import { RouterTestingModule } from '@angular/router/testing';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CurrencyAddComponent } from './currency-add/currency-add.component';
import { CurrencyEditComponent } from './currency-edit/currency-edit.component';
import { CURRENCY_ROUTES } from './currencies.routes';

describe('CurrenciesRoutingModule', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [
        RouterTestingModule.withRoutes(CURRENCY_ROUTES)
      ],
      declarations: [
        CurrencyAddComponent,
        CurrencyEditComponent,
        CurrencyListComponent
      ]
    });
  });

  router = TestBed.inject(Router);
  location = TestBed.inject(Location);
  fixture = TestBed.createComponent(CurrencyListComponent);
  router.initialNavigation();

  it('navigate to "add" redirects to /add', fakeAsync(() => {
    router.navigate(['add']);
    tick()
    expect(location.path()).toBe('/add');
  }));

});


