import { Routes } from "@angular/router";
import { AddCurrencyComponent } from './add-currency/add-currency.component';
import { CurrencyListComponent } from "./currency-list/currency-list.component";
import { EditCurrencyComponent } from './edit-currency/edit-currency.component';

export const CURRENCY_ROUTES: Routes = [
  { path: '', component: CurrencyListComponent },
  { path: 'add', component: AddCurrencyComponent},
  { path: 'edit/:code', component: EditCurrencyComponent},
]
