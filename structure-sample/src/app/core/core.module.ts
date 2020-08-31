import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MaterialCollectionModule } from ".././material-collection/material-collection.module";
import { HomeComponent } from './home';
import { PageNotFoundComponent } from "./page-not-found";
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.componet';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialCollectionModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent
  ],
  providers: [MatConfirmDialogComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error("You should import core module only in the root module")
    }
  }
}
