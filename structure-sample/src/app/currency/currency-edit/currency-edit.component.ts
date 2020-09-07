import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Currency } from '../shared/currency.model';
import { CurrencyService } from '../shared/currency.service';

@Component({
  selector: 'app-currency-edit',
  templateUrl: './currency-edit.component.html',
  styleUrls: ['./currency-edit.component.css']
})
export class CurrencyEditComponent implements OnInit {

  currency: Currency
  constructor(private route: ActivatedRoute, private currencyService: CurrencyService) {
  }

  ngOnInit(): void {

    this.currency = new Currency();
    let id;
    this.route.paramMap.subscribe(params => id = params.get('id'));

    this.currencyService.getCurrency(id).subscribe(data => this.currency = data)

    console.log(this.currency);
    // this.route.paramMap.subscribe(params => console.log(params.get('id')));
    // this.route.queryParams.subscribe(params => console.log(params['id']));

  }

  onEdit() {

  }

}
