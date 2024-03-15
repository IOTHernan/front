import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from './../../services/autenticacion.service';
import { Router, RouterLink } from '@angular/router';
import { RespuestaDTO } from './../../../app/services/respuest-dto';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	respta: RespuestaDTO = { salioBien: false, msj: "" };
	mostrarMsj: boolean = false;

	constructor(
		private formBuilder: FormBuilder,
		private autenticacionService: AutenticacionService,
		private ruta: Router) {
		this.loginForm = this.formBuilder.group({
			//email: ['', [Validators.required, Validators.email]],
			username: ['', [Validators.required, Validators.minLength(2)]],
			password: ['', [Validators.required, Validators.minLength(8)]]
		})
	}

	ngOnInit() {
		console.log('[ln27] ' + 'Login');
	}

	//get Email(){
	//  return this.form.get('email');
	//}

	get username() {
		return this.loginForm.get('username')
	}

	get password() {
		return this.loginForm.get('password');
	}

	ingresar() {
		if (this.loginForm.valid) {
			if (this.loginForm.value.username === 'sole' && this.loginForm.value.password === '123456') {
				this.mostrarMsj = true;
				this.autenticacionService.iniciarSesion();
				//respta
				this.respta.salioBien = true;
				this.respta.msj = "¡Buena! Ya iniciaste sesión!";
				//navegar a inicio
				this.ruta.navigate(["/portfolio"]);

			} else if (this.loginForm.value.username === '' || this.loginForm.value.password === '') {
				this.mostrarMsj = true;
				this.respta.msj = "Se necesita usuario y contraseña para ingresar";

			} else {
				this.mostrarMsj = true;
				this.respta.msj = "Mmm... Usuario o contraseña inválidos";
			}
		}
	}


	/* onLogin(event: Event) {
		event.preventDefault;
		this.autenticacionService.login(this.loginForm.value).subscribe(data => {
			console.log("Archivo Login Component , seteo del token: ", data.token);
			sessionStorage.setItem('token', data.token);
			this.autenticacionService.setToken(data.token);
			this.ruta.navigate(['/portfolio']);
		});
	} */
}