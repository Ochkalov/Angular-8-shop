import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {catchError, first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    login: ['admin', Validators.required],
    password: ['admin', Validators.required]
  });
  serverErrors: { [key: string]: string } = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
  }

  submit(e, values): void {
    e.preventDefault();

    this.serverErrors = {};
    this.authService.login(values)
      .pipe(
        first(),
        catchError((err) => this.serverErrors = err)
      ).subscribe(() => this.router.navigate(['/product-list']));
  }
}
