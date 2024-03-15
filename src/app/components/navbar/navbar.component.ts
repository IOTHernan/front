import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPersonas } from './../../interfaces/ipersonas';
import { AutenticacionService } from './../../services/autenticacion.service';
import Swal from 'sweetalert2';
import { NgZone } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
// declare var gapi: any;

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
	imageUrl!: string;
	@Input() isLogged!: boolean;
	@Input() personas!: IPersonas;
	// githubUrl!: string;
	// linkedinUrl!: string;


	loginActive: Boolean = true;
	registerActive: Boolean = false;
	portfolioActive: Boolean = false;
	pageNotFoundActive: Boolean = false;
	rutaActiva: any;

	constructor(private storage: AngularFireStorage,
		private ngZone: NgZone, 
		private router: Router, 
		private autenticacionService: AutenticacionService) {
			const storageRef = this.storage.ref('/b/front-ad0dc.appspot.com/o/chefacebook.jpg');
		 // Obtener la URL de descarga de la imagen
		 storageRef.getDownloadURL().subscribe(url => {
			this.imageUrl = url;
		  });
		}

	ngOnInit(): void {
		console.log('[NAVBAR]');
		
		console.log('CHE: islogged:', this.isLogged);
		console.log(this.imageUrl);
		
		// this.githubUrl = this.personas.githubUrl;
		// this.linkedinUrl = this.personas.linkedinUrl;
		// this.ngZone.runOutsideAngular(() => {
			// gapi.load('client:auth2', () => {
				// gapi.client
					// .init({
						// clientId: "309525837536-er5t0ivbftkvli42m9isitb700gp9950.apps.googleusercontent.com",
						// apiKey: 'AIzaSyCpb7Sw8X_r7VSMi08EGYq03Zt3o62YDu4',
						// discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
						// scope: 'https://www.googleapis.com/auth/drive.readonly',
					// })
					// .then(
						// () => {
							// Realiza acciones después de la inicialización
							// console.log('API de Google Drive inicializada');
						// },
						// (error: any) => {
							// console.error('Error al inicializar la API de Google Drive', error);
						// }
					// );
			// });
		// });
		// gapi.client.drive.files.list({
			// pageSize: 10,
			// fields: 'nextPageToken, files(id, name)',
		// }).then((response: any) => {
			// const files = response.result.files;
			// if (files && files.length > 0) {
				// console.log('Archivos en Google Drive:');
				// files.forEach((file: any) => {
					// console.log(`${file.name} (${file.id})`);
				// });
			// } else {
				// console.log('No se encontraron archivos.');
			// }
		// });
		this.rutaActiva = this.router.url;
		console.log(this.rutaActiva);

		console.log("Ruta activa: ", this.router.url);

		switch (this.router.url) {
			case '/portfolio': {
				this.portfolioActive = true;
				this.registerActive = false;
				this.loginActive = false;
				break;
			}
			case '/login': {
				this.loginActive = true;
				this.registerActive = false;
				this.portfolioActive = false;
				this.pageNotFoundActive = false;
				break;
			}
			case '/register': {
				this.registerActive = true;
				this.loginActive = false;
				break;
			}
			default: {
				this.pageNotFoundActive = true;
				this.portfolioActive = false;
				this.registerActive = false;
				this.loginActive = false;
				break;
			}
		}
	}

	// irALaSeccion(seccion: string) {
		// window.location.hash = "";
		// window.location.hash = seccion;
	// }

	cerrarSesion() {
		this.autenticacionService.cerrarSesion();
		window.location.reload();
	}

	logout(event: Event) {
		event.preventDefault;
		Swal.fire({
			title: '¿Cerrar sesión?',
			text: "",
			icon: 'warning',
			showCancelButton: true,
			cancelButtonColor: '#747174',
			cancelButtonText: 'Cancelar',
			confirmButtonColor: '#00b5ff',
			confirmButtonText: 'Confirmar'
		}).then((result) => {
			if (result.isConfirmed) {
				sessionStorage.removeItem('token');
				this.autenticacionService.removeToken();
				console.log("Token removido, notifico desde navbar ", sessionStorage.getItem('token'));
				this.router.navigate(['/login']);
			}
		}
		)
	}
}