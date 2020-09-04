import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { APP_Routes } from "./app.routes";


@NgModule({
    imports:[RouterModule.forRoot(APP_Routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
