import { AbstractControl, ValidationErrors } from '@angular/forms';


export class NameValidators {
  static canNotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return { canNotContainSpace: true }

    return null;
  }
}
