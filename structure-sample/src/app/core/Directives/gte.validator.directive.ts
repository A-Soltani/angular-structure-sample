import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[gteValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: gteValidatorDirective, multi: true }
  ]
})

export class gteValidatorDirective implements Validator {

  @Input("gteNum") gteNum:number

  validate(control: AbstractControl): ValidationErrors {
    let v: number = +control.value;

    if (isNaN(v)) {
      return { 'gte': true, 'requiredValue': this.gteNum }
    }

    if (v <= +this.gteNum) {
      return { 'gte': true, 'requiredValue': this.gteNum }
    }

    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
