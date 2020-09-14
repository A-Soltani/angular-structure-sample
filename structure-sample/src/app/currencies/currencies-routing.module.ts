import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CURRENCY_ROUTES } from './currencies.routes';



@NgModule({
  imports: [RouterModule.forChild(CURRENCY_ROUTES)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
