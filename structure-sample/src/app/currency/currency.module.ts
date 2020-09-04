import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyRoutingModule } from './currency-routing.module';
import { AddCurrencyComponent } from './add-currency/add-currency.component';



@NgModule({
  declarations: [CurrencyListComponent, AddCurrencyComponent],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyRoutingModule,
  ]
})
export class CurrencyModule { }
