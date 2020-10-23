import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Currency } from '../shared/currency.model';
import { CurrencyService } from '../shared/currency.service';
import { AppError, NotFoundError } from '../../core';

@Component({
  selector: 'app-currency-edit',
  templateUrl: './currency-edit.component.html',
  styleUrls: ['./currency-edit.component.css']
})
export class CurrencyEditComponent implements OnInit {

  @ViewChild('form') form: NgForm
  currency: Currency
  constructor(private route: ActivatedRoute, private currencyService: CurrencyService, private router: Router) {
  }

  ngOnInit(): void {
    this.currency = new Currency();
    const id = this.route.snapshot.params['id'];
    this.currencyService.getCurrency(id).subscribe(data => this.currency = data)
  }

  onSubmit() {
    this.currencyService.updateCurrency(this.currency)
      .subscribe(
        (updatedCurrency: Currency) => {
          this.currency = updatedCurrency;
          this.router.navigate(['/currencies'])
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This currency deosn\'t exist right now.');
        });
  }

}
