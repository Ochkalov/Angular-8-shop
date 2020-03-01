import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    email: ['admin@gmail.com', [
      Validators.required,
      Validators.email
    ]],
    password: ['admin', Validators.required]
  });
  serverErrors: { [key: string]: string } = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cd: ChangeDetectorRef,
    private authService: AuthService
  ) {
  }

  submit(e, values): void {
    e.preventDefault();

    this.serverErrors = {};
    this.authService.login(values)
      .then(() => this.router.navigate(['/product-list']))
      .catch((error) => {
        this.serverErrors = { ...error };
        this.cd.detectChanges();
      });
  }
}
