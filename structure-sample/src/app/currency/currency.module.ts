import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyRoutingModule } from './currency-routing.module';



@NgModule({
  // declarations: [CurrencyListComponent],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
  ]
})
export class CurrencyModule { }
