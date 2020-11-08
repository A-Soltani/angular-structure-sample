import { AbstractControl } from '@angular/forms';
import { TestBed } from "@angular/core/testing";
import { CustomvalidationService } from "./custom-validation.service";

describe('CustomValidationService', () => {

  let customValidationService: CustomvalidationService

  beforeEach(() => {
    customValidationService = TestBed.inject(CustomvalidationService);
  });

  it('Should be created', () => {
    expect(customValidationService).toBeTruthy();
  });

  it('Should return false when value of a control contains space', () => {
    let control: AbstractControl;
    control.setValue('test ');
    var validation = customValidationService.canNotContainSpace(control);
    expect(validation).toBeFalse();
  });
});
