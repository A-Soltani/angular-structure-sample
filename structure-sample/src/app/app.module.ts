import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MaterialCollectionModule } from './material-collection/material-collection.module';
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
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
