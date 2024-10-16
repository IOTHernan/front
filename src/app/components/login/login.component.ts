import { LoginUsuario } from './../../model/login-usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from './../../../app/services/auth.service';
import { TokenService } from './../../../app/services/token.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';
import { ToastService } from './../../services/toast.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	isLogged = false;
	isLogginFail = false;
	loginUsuario!: LoginUsuario;
	nombreUsuario!: string;
	password!: string;
	roles: string[] = [];
	errorMsj!: string;
	// ----
	registerUser = { email: '', password: '' };
	loginUser = { email: '', password: '' };
	currentUser: any;

	loginForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', Validators.required),
	});

	constructor(private authService: AuthenticationService,
		private tokenService: TokenService, private router: Router,
		private afAuth: AngularFireAuth, private db: AngularFirestore, private toast: ToastService
	) { } /* private authService: AuthService, */

	ngOnInit(): void {
		console.log('Login component');
		if (this.tokenService.getToken()) {
			console.log('token true');
			this.isLogged = true
			this.isLogginFail = false;
			this.roles = this.tokenService.getAuthorities()
		}
		this.afAuth.authState.subscribe(user => {
			if (user) {
				console.log(user)
				this.currentUser = user;
			} else {
				this.currentUser = null;
			}
		});
	}

	get email() {
		return this.loginForm.get('email');
	}

	get passwordField() {
		return this.loginForm.get('password');
	}



	// Registrar un nuevo usuario.
	async register() {
		try {
			const user = await this.afAuth.createUserWithEmailAndPassword(this.registerUser.email, this.registerUser.password);
			console.log('Usuario registrado con éxito', user);
			// Enviar correo electrónico de verificación
			//   await user.sendEmailVerification();
			console.log('Correo electrónico de verificación enviado');
		} catch (error) {
			console.error('Error al registrar el usuario:', error);
		}
	}

	// Modificar contraseña
	async updatePassword() {
		try {
			const newPassword = 'nueva_contraseña';
			await this.currentUser.updatePassword(this.password);
			console.log('Contraseña actualizada con éxito');
		} catch (error) {
			console.error('Error al actualizar la contraseña:', error);
		}
	}

	async deleteAccount() {
		try {
			await this.currentUser.delete();
			console.log('Cuenta eliminada con éxito');
		} catch (error) {
			console.error('Error al eliminar la cuenta:', error);
		}
	}


	onLogin(): void {
		/* this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password)
		this.authService.login(this.loginUsuario).subscribe(data => {
		  this.isLogged = true
		  this.isLogginFail = false
		  this.tokenService.setToken(data.token)
		  this.tokenService.setUsername(data.nombreUsuario)
		  this.tokenService.setAuthorities(data.authorities)
		  this.roles = data.authorities
		  this.router.navigate([''])
		}, err => {
		  this.isLogged = false
		  this.isLogginFail = true
		  this.errorMsj = err.error.mensaje
		  console.log(this.errorMsj)
		}) */
		if (this.nombreUsuario === 'admin@admin.com' && this.password === 'usuario1') {
			console.log('logged true');
			this.isLogged = true;
			this.isLogginFail = false;
			this.router.navigate(['/home']);
		}
	}

	submit(): void {
		if (!this.loginForm.valid) {
			return;
		}

		const { email, password } = this.loginForm.value;
		this.authService.login(email, password).pipe(
			this.toast.observe({
				success: 'Loggued in successfully',
				loading: 'Logging in...',
				error: 'There was an error'
			})
		).subscribe(() => {
			this.router.navigate(['/home'])
		});
	}

	/*   if (this.nombreUsuario === 'usuario1' && this.password === 'usuario1') {
		console.log('logged true');
		this.isLogged = true;
		this.isLogginFail = false;
		this.router.navigate(['/home']);
	  }
	} */

}
