import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { CurrencyEditComponent } from './currency-edit.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


describe('CurrencyEditComponent', () => {
  let component: CurrencyEditComponent;
  let fixture: ComponentFixture<CurrencyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyEditComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

// it('should create a form', () => {
//   const compiled = fixture.debugElement.nativeElement;
//   let el = compiled.querySelector('#from')
//   expect(el).toBeTruthy();
// })

it('should create a form contains 5 contols', () => {
    expect(component).toContain('code');
  });
});
