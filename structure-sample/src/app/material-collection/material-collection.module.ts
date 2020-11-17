import { NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  exports: [
    MatDialogModule,
    MatSliderModule
  ]
})
export class MaterialCollectionModule { }
