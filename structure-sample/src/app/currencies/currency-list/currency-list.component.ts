import { Component, OnInit } from '@angular/core';
import { Currency } from '../shared/currency.model';
import { CurrencyService } from '../shared/currency.service';

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
    this.currencyService.getCurrencies().subscribe(
      response => {
        this.currencies = response;
      },
      error => {
        console.error('An unexpected error occured', error);
      }
    );
  }

  onDelete(id: number) {
    this.currencyService.deleteCurrency(id).subscribe(() => {
      console.log(`currency with ${id} has been deleted`);
    })
  }

}
