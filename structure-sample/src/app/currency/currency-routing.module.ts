import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { currencyRoutes } from './currency.routes';



@NgModule({
  imports: [RouterModule.forChild(currencyRoutes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
