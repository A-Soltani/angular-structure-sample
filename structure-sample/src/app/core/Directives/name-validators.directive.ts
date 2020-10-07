import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { NameValidators } from './../validators/name.validators';

@Directive({
  selector: '[nameMatch][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: NameValidators.canNotContainSpace,
      multi: true
    }
  ]
})
export class NameValidatorDirective  {
  // validate(control: AbstractControl) {
  //   return NameValidators.canNotContainSpace(control);
  // }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
