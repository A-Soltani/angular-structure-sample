import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Currency } from '../shared/currency.model';

@Component({
  selector: 'app-edit-currency',
  templateUrl: './edit-currency.component.html',
  styleUrls: ['./edit-currency.component.css']
})
export class EditCurrencyComponent implements OnInit {

  currency: Currency
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currency = new Currency();
    this.route.paramMap.subscribe(params => console.log(params.get('code')));
  }

  onEdit() {
    console.log(this.currency);
    // this.router.navigate(['/currency'])
    this.router.navigate([''])
  }

}
