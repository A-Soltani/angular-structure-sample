import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyRoutingModule } from './currency-routing.module';
import { AddCurrencyComponent } from './add-currency/add-currency.component';
import { EditCurrencyComponent } from './edit-currency/edit-currency.component';



@NgModule({
  declarations: [CurrencyListComponent, AddCurrencyComponent, EditCurrencyComponent],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyRoutingModule,
  ]
})
export class CurrencyModule { }
