import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [],
  imports: [
    MatDialogModule,
    MatSliderModule
  ],
  exports: [
    MatDialogModule,
    MatSliderModule
  ]
})
export class MaterialCollectionModule { }
