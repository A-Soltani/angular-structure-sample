import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CustomvalidationService {
  canNotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string)?.indexOf(' ') >= 0)
      return { canNotContainSpace: false }

    return null;
  }
}
