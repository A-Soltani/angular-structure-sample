import { Routes } from "@angular/router";
import { HomeComponent, PageNotFoundComponent } from "./core/index";

export const APP_Routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "currency",
    loadChildren: () => import('./currency').then(m => m.CurrencyModule)
  },
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
]
