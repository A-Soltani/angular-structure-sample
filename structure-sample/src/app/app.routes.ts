import { Routes } from "@angular/router";

import { HomeComponent, PageNotFoundComponent } from "./core/index";

export const APP_Routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "currencies",
    loadChildren: () => import('./currencies').then(m => m.CurrenciesModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  } // Wildcard route for a 404 page
]
