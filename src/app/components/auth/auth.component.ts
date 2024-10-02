import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

	// Propiedades para almacenar información del usuario registerUser = { email: '', password:	};
	loginUser = { email: '', password: '' }; currentUser: any;
	newPassword: any;
	registerUser: any;
	constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

	ngOnInit(): void {
		// Observar el estado de autenticación del usuario
		this.afAuth.authState.subscribe(user => {
			if (user) {
				this.currentUser = user;
			} else {
				this.currentUser = null;
			}
		});
	}

	// Registrar un nuevo usuario
	async register() {
		try {
			const user = await this.afAuth.createUserWithEmailAndPassword(this.registerUser.email, this.registerUser.password);
			console.log('Usuario registrado:', user);
			// Enviar correo electrónico de verificación await user.sendEmailVerification();
		} catch (error) {

			console.error('Error al registrar usuario:', error);
		}
	}

	// Iniciar sesión
	async login() {
		try {
			const user = await this.afAuth.signInWithEmailAndPassword(this.loginUser.email, this.loginUser.password);
			console.log('Usuario autenticado:', user);
		} catch (error) {
			console.error('Error al iniciar sesión:', error);
		}
	}

	// Modificar contraseña
	async updatePassword() {
		try {
			await this.currentUser.updatePassword(this.newPassword); console.log('Contraseña actualizada');
		} catch (error) {
			console.error('Error al modificar contraseña:', error);
		}
	}

	// Eliminar cuenta de usuario
	async deleteAccount() {
		try {
			await this.currentUser.delete(); console.log('Cuenta eliminada');
		} catch (error) {
			console.error('Error al eliminar cuenta:', error);
		}
	}
}
