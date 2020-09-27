import { error } from '@angular/compiler/src/util';
import { AppErrorHandler } from './../../shared/models/errors/app-error-handler';
import { AppError } from '../../shared/models/errors/app-error';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Currency } from '../shared/currency.model';
import { CurrencyService } from '../shared/currency.service';
import { NotFoundError } from 'src/app/shared';

@Component({
  selector: 'app-currency-edit',
  templateUrl: './currency-edit.component.html',
  styleUrls: ['./currency-edit.component.css']
})
export class CurrencyEditComponent implements OnInit {

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
        (response: Currency) => {
          this.currency = response;
          this.router.navigate(['/currencies'])
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This currency deosn\'t exist right now.');
          else throw error;
        });
  }

}
