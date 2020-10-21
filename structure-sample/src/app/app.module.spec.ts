import { Location } from "@angular/common";
import { APP_Routes } from './app.routes';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, getTestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './core';

describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(APP_Routes)
      ],
      declarations: [
        HomeComponent,
        AppComponent
      ]
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('navigate to "" redirects to /home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/home');
  }));

});
