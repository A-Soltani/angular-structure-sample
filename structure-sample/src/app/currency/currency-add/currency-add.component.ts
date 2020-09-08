import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Currency } from '../shared/currency.model';

@Component({
  selector: 'app-currency-add',
  templateUrl: './currency-add.component.html',
  styleUrls: ['./currency-add.component.css']
})
export class CurrencyAddComponent implements OnInit {

  currency: Currency
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currency = new Currency();
  }

  onAdd() {
    console.log(this.currency);
    this.router.navigate(['/currency'])
  }

}
