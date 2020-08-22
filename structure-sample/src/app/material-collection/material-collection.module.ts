import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
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
  ],
  providers:[
    MatDialog
  ]
})
export class MaterialCollectionModule { }
