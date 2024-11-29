import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from './../../../model/experiencia';
import { ExperienciaService } from './../../../../app/services/experiencia.service';
import { ImageService } from './../../../../app/services/image.service';
import { Storage, ref, list, getDownloadURL } from '@angular/fire/storage';

@Component({
	selector: 'app-edit-experiencia',
	templateUrl: './edit-experiencia.component.html',
	styleUrls: ['./edit-experiencia.component.scss'],
})
export class EditExperienciaComponent implements OnInit {
	url: string = '';
	expLab: Experiencia = new Experiencia(); // Inicializamos expLab con un objeto vacío

	constructor(
		private sExperiencia: ExperienciaService,
		private activateRouter: ActivatedRoute,
		private router: Router,
		public imgService: ImageService,
		private storage: Storage
	) { }

	ngOnInit(): void {
		const id = this.activateRouter.snapshot.params['id'];
		this.sExperiencia.detail(id).subscribe(
			(data) => {
				this.expLab = data; // || new Experiencia(); // Manejamos el caso de que data pueda ser null
				this.getImagen();
			},
			(err) => {
				alert('Error en editar experiencia');
				this.router.navigate(['']);
			}
		);
	}

	onUpdate(): void {
		const id = this.activateRouter.snapshot.params['id'];
		this.expLab.img = this.url;

		this.sExperiencia.update(id, this.expLab).subscribe(
			(data) => {
				alert('Experiencia editada');
				this.router.navigate(['']);
			},
			(err) => {
				alert('Error en editar experiencia');
				this.router.navigate(['']);
			}
		);
	}

	uploadImage($event: any): void {
		this.url = '';
		const name = 'experience_' + this.expLab.nombreE;
		this.imgService.uploadImage($event, name);
		setTimeout(() => {
			this.getImagen(name);
		}, 2000);
	}

	async getImagen(name?: string): Promise<void> {
		try {
			const imgsRef = ref(this.storage, 'imagen');
			const response = await list(imgsRef);
			const imageName = name || 'experience_' + this.expLab.nombreE;
			const imageItem = response.items.find((x) => x.name === imageName);
			if (imageItem) {
				this.url = await getDownloadURL(imageItem);
			} else {
				console.log('No se pudo encontrar la imagen de la experiencia: ' + this.expLab.nombreE);
			}
		} catch (error) {
			console.error('Error al obtener la imagen:', error);
		}
	}
}
