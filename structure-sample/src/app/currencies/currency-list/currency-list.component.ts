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
    this.currencyService.getCurrencies().subscribe(data => this.currencies = data);
  }

  onDelete(id: number) {
    this.currencyService.deleteCurrency(id).subscribe(() => {
      console.log(`currency with ${id} has been deleted`);
    })
  }

}
