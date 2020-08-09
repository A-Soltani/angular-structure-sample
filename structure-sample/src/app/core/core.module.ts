import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MaterialCollectionModule } from ".././material-collection/material-collection.module";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialCollectionModule
  ],
  exports: [],
  providers: [],
})
export class CoreModule { }
