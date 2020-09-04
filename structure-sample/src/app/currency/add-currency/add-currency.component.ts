import { Component, OnInit } from '@angular/core';
import { Currency } from '../shared/currency.model';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.css']
})
export class AddCurrencyComponent implements OnInit {
  currency: Currency
  constructor() { }

  ngOnInit(): void {
    this.currency = new Currency();
  }

  onAdd() {
    console.log(this.currency);
  }

}
