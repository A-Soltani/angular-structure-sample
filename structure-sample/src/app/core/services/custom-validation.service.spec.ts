import { TestBed } from "@angular/core/testing";

import { AbstractControl, FormControl } from '@angular/forms';

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
    let control = new FormControl(" test ");
    expect(customValidationService.canNotContainSpace(control))
      .toEqual({ canNotContainSpace: false });
  });
});
