import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from './../../../model/educacion';
import { EducacionService } from './../../../services/educacion.service';
import { ImageService } from './../../../services/image.service';

@Component({
	selector: 'app-edit-educacion',
	templateUrl: './edit-educacion.component.html',
	styleUrls: ['./edit-educacion.component.css'],
})
export class EditEducacionComponent implements OnInit {
	educ: Educacion = new Educacion();
	url: string = '';

	constructor(
		private sEducacion: EducacionService,
		private activateRouter: ActivatedRoute,
		private router: Router,
		private imgService: ImageService
	) { }

	ngOnInit(): void {
		const id = this.activateRouter.snapshot.params['id'];
		this.sEducacion.detail(id).subscribe(
			(data) => {
				this.educ = data;
				this.getImagen();
			},
			(err) => {
				alert('Error al cargar los datos de la educación');
				this.router.navigate(['']);
			}
		);
	}

	onUpdate(): void {
		const id = this.activateRouter.snapshot.params['id'];
		this.educ.img = this.url;
		this.sEducacion.update(id, this.educ).subscribe(
			() => {
				alert('Educación editada');
				this.router.navigate(['']);
			},
			(err) => {
				alert('Error al editar la educación');
				this.router.navigate(['']);
			}
		);
	}

	async uploadImage(event: any) {
		this.url = '';
		const file = event.target.files[0];
		if (!file) {
			alert('No se seleccionó ningún archivo');
			return;
		}

		const name = 'education_' + this.educ.nombreE;

		try {
			await this.imgService.uploadImage(file, name);
			console.log('Imagen subida con éxito');
			await this.getImagen();
		} catch (error) {
			console.error('Error al subir la imagen:', error);
			alert('Error al subir la imagen');
		}
	}

	async getImagen() {
		const name = 'education_' + this.educ.nombreE;

		try {
			this.url = await this.imgService.getImageUrl(name);
			console.log('URL de la imagen:', this.url);
		} catch (error) {
			console.error('No se pudo encontrar la imagen de la educación:', error);
			alert(`No se pudo encontrar la imagen de la educación: ${this.educ.nombreE}`);
		}
	}
}
