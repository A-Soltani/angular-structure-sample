import { Component } from '@angular/core';

import { MatConfirmDialogService } from "./core/mat-confirm-dialog/mat-confirm-dialog.service";
import { CurrencyService } from './currency/shared/currency.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [MatConfirmDialogService]
})
export class AppComponent {
  title = 'structure-sample';

  constructor(private currencyService: CurrencyService) {

  }

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe(data => console.log(data));
  }

  // constructor(private matConfirmDialogService: MatConfirmDialogService) {

  // }

  onConfirm() {
    // this.matConfirmDialogService.openConfirmDialog();
  }
}
