import { Educacion } from './../../model/educacion';
import { Component, OnInit } from '@angular/core';
import { EducacionService } from './../../services/educacion.service';
import { TokenService } from './../../services/token.service';

@Component({
	selector: 'app-educacion',
	templateUrl: './educacion.component.html',
	styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
	educacion: Educacion[] = [];

	constructor(
		private sEducacion: EducacionService,
		private sToken: TokenService
	) { }

	isLogged = false;

	ngOnInit(): void {
		console.log('CargaEducacion');
		
		this.cargarEducacion();
		/*if (this.sToken.getToken()) {
			this.isLogged = true;
			console.log('isLogged');
			
		} else {
			console.log('isLogged false');
			
			this.isLogged = false;
		}*/
	}

	cargarEducacion(): void {
		this.sEducacion.lista().subscribe((data) => {
			this.educacion = data;
			console.log(this.educacion);
			
		});
	}

	delete(id?: number) {
		if (id !== undefined) {
			this.sEducacion.delete(id).subscribe(
				(data) => {
					this.cargarEducacion();
				},
				(err) => alert('No se pudo borrar la educacion')
			);
		}
	}
}
