import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
})
export class Login {
  private authService = inject(Auth);
  private fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    this.authService.login(this.form.value).subscribe((res: any) => {
      this.authService.saveToken(res.token);
    });
  }
}
