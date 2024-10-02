import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from './../../../../app/services/image.service';
import { ExperienciaService } from './../../../../app/services/experiencia.service';
import { Experiencia } from './../../../../app/model/experiencia';
import { ref, list, getDownloadURL } from '@angular/fire/storage';

@Component({
	selector: 'app-new-experiencia',
	templateUrl: './new-experiencia.component.html',
	styleUrls: ['./new-experiencia.component.css'],
})
export class NewExperienciaComponent implements OnInit {
	nombreE = '';
	descripcionE = '';
	puesto = '';
	periodo = '';
	img = '';

	constructor(
		private sExperiencia: ExperienciaService,
		private router: Router,
		public imgService: ImageService
	) { }

	ngOnInit(): void {
		console.log('NewExperiencia component');
	}

	onCreate(): void {
		const exp = new Experiencia(
			this.nombreE,
			this.descripcionE,
			this.puesto,
			this.periodo,
			this.img
		);
		this.sExperiencia.save(exp).subscribe({
			next: (data) => {
				alert('Experiencia añadida');
				this.router.navigate(['']);
			},
			error: (err) => {
				alert('Error en añadir experiencia');
				this.router.navigate(['']);
			},
		});
	}

	uploadImage($event: any): void {
		const name = 'experience_' + this.nombreE;
		this.imgService.uploadImage($event, name);

		// Espera antes de intentar obtener la imagen
		setTimeout(() => {
			this.getImagen(name);
		}, 3000);
	}
	async getImagen(name: string): Promise<void> {
		try {
			const imgsRef = ref(this.imgService.storage, 'imagen');
			const response = await list(imgsRef);
			const imageItem = response.items.find((x) => x.name === name);
			if (imageItem) {
				this.img = await getDownloadURL(imageItem);
			} else {
				console.log('No se pudo encontrar la imagen de la experiencia:' + this.nombreE);
			}
		} catch (error) {
			console.error('Error al obtener la imagen:', error);
		}
	}
}
