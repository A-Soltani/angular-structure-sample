import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

@Injectable()
export class MatConfirmDialogService {
  // private x => makes private field x in the class
  constructor(private dialog: MatDialog) { }
}
