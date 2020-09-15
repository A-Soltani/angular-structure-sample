import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Currency } from '../shared/currency.model';

@Component({
  selector: 'app-currency-add',
  templateUrl: './currency-add.component.html',
  styleUrls: ['./currency-add.component.css']
})
export class CurrencyAddComponent implements OnInit {

  @ViewChild('form') form: NgForm
  currency: Currency
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currency = new Currency();
  }

  onAdd() {
    console.log(this.currency);
    // this.router.navigate(['/currencies'])
  }

  onClear() {
    this.form.reset();
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.valid);
  }

}
