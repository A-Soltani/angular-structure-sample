import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";

import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyRoutingModule } from './currencies-routing.module';
import { CurrencyAddComponent } from './currency-add/currency-add.component';
import { CurrencyEditComponent } from './currency-edit/currency-edit.component';
import { NameWithNoSpaceValidatorDirective } from '../core/directives/name-with-no-space.directive';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    CurrencyListComponent,
    CurrencyAddComponent,
    CurrencyAddComponent,
    CurrencyEditComponent,
    NameWithNoSpaceValidatorDirective

  ],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyRoutingModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule
  ]
})
export class CurrenciesModule { }
