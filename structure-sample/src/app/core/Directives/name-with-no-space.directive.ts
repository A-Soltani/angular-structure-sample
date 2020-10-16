import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import { CustomvalidationService } from "../services";


@Directive(
  {
    selector: "[appNameWithNoSpace]",
    providers: [
      {
        provide: NG_VALIDATORS,
        // useExisting: NameWithNoSpaceDirective,
        useExisting: NameWithNoSpaceValidatorDirective,
        multi: true
      }
    ]
  }
)
export class NameWithNoSpaceValidatorDirective implements Validator {

  constructor(private customvalidationService: CustomvalidationService) { }

  validate(control: AbstractControl): ValidationErrors {
    return this.customvalidationService.canNotContainSpace(control);
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
