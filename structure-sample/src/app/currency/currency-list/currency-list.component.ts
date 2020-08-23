import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../shared/currency.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe(data => console.log(data));
  }

}
