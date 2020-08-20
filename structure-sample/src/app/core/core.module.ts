import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MaterialCollectionModule } from ".././material-collection/material-collection.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialCollectionModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent
  ],
  providers: [],
})
export class CoreModule { }
