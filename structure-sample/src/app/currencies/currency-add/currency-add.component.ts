
import { CurrencyService } from './../shared/currency.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Currency } from '../shared/currency.model';
import { AppError, BadInput } from '../../core';

@Component({
  selector: 'app-currency-add',
  templateUrl: './currency-add.component.html',
  styleUrls: ['./currency-add.component.css']
})
export class CurrencyAddComponent implements OnInit {

  @ViewChild('form') form: NgForm
  currency: Currency
  constructor(private currencyService: CurrencyService, private router: Router) { }

  ngOnInit(): void {
    this.currency = new Currency();
  }

  onClear() {
    debugger;
    console.log(this.form);

    this.form.reset();
  }

  onSubmit() {
    this.currencyService.addCurrency(this.currency)
      .subscribe(
        (currencyId: number) => {
          this.currency.id = currencyId;
          this.router.navigate(['/currencies']);
        },
        (error: AppError) => {
          if (error instanceof BadInput)
            alert('Bad request error occured');
        });
  }

}
