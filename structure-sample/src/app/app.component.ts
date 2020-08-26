import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { MatConfirmDialogService } from "./core/mat-confirm-dialog/mat-confirm-dialog.service";
import { Currency } from './currency/shared/currency.model';
import { CurrencyService } from './currency/shared/currency.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [MatConfirmDialogService]
})
export class AppComponent {
  title = 'structure-sample';
  currencies: Currency[] = []
  currentModel: Currency = new Currency();
  constructor(private currencyService: CurrencyService) {

  }

  ngOnInit(): void {
    // this.currencyService.getCurrencies().subscribe(data => console.log(data));
    this.currencyService.getCurrencies().subscribe(data => this.currencies = data);
  }

  onAdd() {
    this.currencyService.addCurrency(this.currentModel).subscribe();
  }

  // constructor(private matConfirmDialogService: MatConfirmDialogService) {

  // }

  onConfirm() {
    // this.matConfirmDialogService.openConfirmDialog();
  }
}
