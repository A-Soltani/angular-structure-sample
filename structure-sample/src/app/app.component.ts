import { Component } from '@angular/core';

import { MatConfirmDialogService } from "./core/mat-confirm-dialog/mat-confirm-dialog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [MatConfirmDialogService]
})
export class AppComponent {
  title = 'structure-sample';

  constructor(private matConfirmDialogService: MatConfirmDialogService) {

  }

  onConfirm() {
    this.matConfirmDialogService.openConfirmDialog();
  }
}
