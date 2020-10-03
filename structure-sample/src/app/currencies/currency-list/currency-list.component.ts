import { Component, OnInit } from '@angular/core';
import { Currency } from '../shared/currency.model';
import { CurrencyService } from '../shared/currency.service';
import { AppError, NotFoundError } from '../../core';

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
      .subscribe(currencies => this.currencies = currencies);
  }

  onDelete(id: number) {
    debugger;
    this.currencyService.deleteCurrency(id)
      .subscribe(() => alert(`currency with ${id} has been deleted`),
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This currency has already been deleted');
        }
      )
  }

}
