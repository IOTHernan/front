import { Component } from '@angular/core';
import { Auth2Service } from './../../services/auth2.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: Auth2Service) { }

  register() {
    this.authService.register(this.email, this.password)
      .then(() => alert('Registro exitoso! Verifica tu email.'))
      .catch(error => alert(error.message));
  }

  login() {
    this.authService.login(this.email, this.password)
      .then(() => alert('Login exitoso!'))
      .catch(error => alert(error.message));
  }

  logout() {
    this.authService.logout()
      .then(() => alert('Logout exitoso!'))
      .catch(error => alert(error.message));
  }
}
