import { AppError } from '../../shared/models/errors/app-error';
import { Component, OnInit } from '@angular/core';
import { Currency } from '../shared/currency.model';
import { CurrencyService } from '../shared/currency.service';
import { NotFoundError } from 'src/app/shared';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  currencies: Currency[] = []
  currentModel: Currency = new Currency();

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getCurrencies()
      .subscribe(
        response => {
          this.currencies = response;
        }
      );
  }

  onDelete(id: number) {
    this.currencyService.deleteCurrency(id)
      .subscribe(
        response => {
          alert(`currency with ${id} has been deleted`);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This currency has already been deleted');
          else
            throw error; // this error is globaly handeled by Errorhandler class
        }
      )
  }

}
