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
});
