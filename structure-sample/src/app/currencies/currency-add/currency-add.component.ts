import { CurrencyService } from './../shared/currency.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Currency } from '../shared/currency.model';
import { CurrencyService } from '../shared/currency.service';

@Component({
  selector: 'app-currency-add',
  templateUrl: './currency-add.component.html',
  styleUrls: ['./currency-add.component.css']
})
export class CurrencyAddComponent implements OnInit {

  @ViewChild('form') form: NgForm
  currency: Currency
<<<<<<< HEAD

=======
>>>>>>> 5fea1772472768fb299aba3221a5a6fbf9bdd4ff
  constructor(private currencyService: CurrencyService, private router: Router) { }

  ngOnInit(): void {
    this.currency = new Currency();
  }

<<<<<<< HEAD
  onSave() {
    this.currency.createdDate = new Date();
    this.currencyService.addCurrency(this.currency).subscribe();
    this.router.navigate(['/currencies'])
  }

=======
>>>>>>> 5fea1772472768fb299aba3221a5a6fbf9bdd4ff
  onClear() {
    this.form.reset();
  }

<<<<<<< HEAD
=======
  onSubmit() {
    this.currencyService.addCurrency(this.currency).subscribe(
      () => this.router.navigate(['/currencies']));
  }

>>>>>>> 5fea1772472768fb299aba3221a5a6fbf9bdd4ff
}
