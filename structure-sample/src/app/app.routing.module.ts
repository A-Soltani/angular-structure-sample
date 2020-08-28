import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { appRoutes } from "./app.routes";


@NgModule({
    imports:[RouterModule.forChild(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
