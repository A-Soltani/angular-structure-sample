import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatConfirmDialogComponent } from './mat-confirm-dialog.componet';


@Injectable()
export class MatConfirmDialogService {

  // private x => makes private field x in the class
  constructor(private dialog: MatDialog) { }

  openConfirmDialog() {
    this.dialog.open(MatConfirmDialogComponent, {
      width: '390px',
      disableClose: false
    })
  }
}
