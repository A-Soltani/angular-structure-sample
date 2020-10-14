import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyRoutingModule } from './currencies-routing.module';
import { CurrencyAddComponent } from './currency-add/currency-add.component';
import { CurrencyEditComponent } from './currency-edit/currency-edit.component';
import { NameWithNoSpaceDirective } from '../core/directives/name-with-no-space.directive';



@NgModule({
  declarations: [
    CurrencyListComponent,
    CurrencyAddComponent,
    CurrencyAddComponent,
    CurrencyEditComponent,
    NameWithNoSpaceDirective

  ],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyRoutingModule,
  ]
})
export class CurrenciesModule { }
