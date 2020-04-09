import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { RegExpService } from './reg-exp.service';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements Validator {
  validate(c: AbstractControl): { [key: string]: boolean } | null {
    return RegExpService.email.test(c.value) ? null : {email: true};
  }
}
