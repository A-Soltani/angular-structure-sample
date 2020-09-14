import { Routes } from "@angular/router";
import { CurrencyAddComponent } from './currency-add/currency-add.component';
import { CurrencyEditComponent } from './currency-edit/currency-edit.component';
import { CurrencyListComponent } from "./currency-list/currency-list.component";

export const CURRENCY_ROUTES: Routes = [
  { path: '', component: CurrencyListComponent },
  { path: 'add', component: CurrencyAddComponent },
  { path: 'edit/:id', component: CurrencyEditComponent },
]
