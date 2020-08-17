import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCollectionModule } from './material-collection/material-collection.module';
// import { MatSliderModule } from '@angular/material/slider';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // CoreModule,
    MaterialCollectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
