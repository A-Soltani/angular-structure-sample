import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyRoutingModule } from './currency-routing.module';



@NgModule({
  declarations: [CurrencyListComponent],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyRoutingModule,
  ]
})
export class CurrencyModule { }
