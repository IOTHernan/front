import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from './../../services/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private router: Router,
    private fb: NonNullableFormBuilder
  ) { }

  ngOnInit(): void {
    console.log("login component");
    alert('Login');

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    console.log('submit:', this.loginForm.value);

    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }

    const toastRef = this.toast.observe({
          success: 'Logged in successfully',
          loading: 'Logging in...',
          error: ({ message }) => `There was an error: ${message} `,
        });

    const l = this.authService.login(email, password);
    console.log(l);

    // this.authService.login(email, password).pipe(finalize(() => toastRef.close())).subscribe({
    // ).subscribe(() => {
        this.router.navigate(['/home']);
      // });
  }
}
