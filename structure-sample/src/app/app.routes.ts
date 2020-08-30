import { Routes } from "@angular/router";
import { HomeComponent } from "./core/index";

export const appRoutes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "currency",
    loadChildren: () => import('./currency/currency.module').then(m => m.CurrencyModule)
  }
]
