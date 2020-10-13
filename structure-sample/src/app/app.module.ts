import { FormsModule } from '@angular/forms';
import { NameWithNoSpaceDirective } from './core/directives/name-with-no-space.directive';
import { gteValidatorDirective } from './core/directives/gte.validator.directive';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MaterialCollectionModule } from './material-collection/material-collection.module';
import { AppRoutingModule } from "./app.routing.module";
// import { AppErrorHandler } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    gteValidatorDirective,
    NameWithNoSpaceDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    MaterialCollectionModule,

  ],
  exports: [
  ],
  providers: [
    // {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
