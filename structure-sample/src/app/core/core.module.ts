import { NameValidatorDirective } from './Directives/name-validators.directive';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
    PageNotFoundComponent,
    // NameValidatorDirective
  ],
  imports: [
    CommonModule,
    MaterialCollectionModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    MatConfirmDialogComponent
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error("You should import core module only in the root module")
    }
  }
}
