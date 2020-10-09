import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CurrencyListComponent } from './currency-list.component';

describe('CurrencyListComponent', () => {
  let component: CurrencyListComponent;
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
