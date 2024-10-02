import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from './../../../model/educacion';
import { EducacionService } from './../../../services/educacion.service';
import { ImageService } from './../../../services/image.service';
import { getStorage, ref, list, getDownloadURL } from '@angular/fire/storage';

@Component({
	selector: 'app-new-educacion',
	templateUrl: './new-educacion.component.html',
	styleUrls: ['./new-educacion.component.css'],
})
export class NewEducacionComponent implements OnInit {
	nombreE: string = '';
	descripcionE: string = '';
	titulo: string = '';
	periodo: string = '';
	img: string = '';

	constructor(
		private sEducacion: EducacionService,
		private activateRouter: ActivatedRoute,
		private router: Router,
		public imgService: ImageService
	) { }

	ngOnInit(): void {
		console.log('new educacion');

	}

	async onCreate(): Promise<void> {
		const exp = new Educacion(this.nombreE, this.descripcionE, this.titulo, this.periodo, this.img);
		try {
			await this.sEducacion.save(exp).toPromise();
			alert('Educación añadida');
			this.router.navigate(['']);
		} catch (error) {
			console.error('Error al añadir Educación:', error);
			alert('Error al añadir Educación');
			this.router.navigate(['']);
		}
	}

	async uploadImage($event: any): Promise<void> {
		this.img = '';
		const name = this.nombreE;/* 'education_' +  */
		try {
			await this.imgService.uploadImage($event, name);
			await this.getImagen();
		} catch (error) {
			console.error('Error al subir la imagen:', error);
			alert('Error al subir la imagen');
		}
	}

	async getImagen(): Promise<void> {
		const storage = getStorage(); // Obtener la referencia al almacenamiento
		const imgsRef = ref(storage, 'imagen'); // Crear una referencia a la carpeta 'imagen'
		const name =  this.nombreE;/* 'education_' + */
        console.log('getImagen:', storage,imgsRef,name);
		try {
			const response = await list(imgsRef); // Obtener la lista de elementos en la carpeta 'imagen'
			const items = response.items;
			const item = items.find((x) => x.name === name);
			if (item) {
				const imageUrl = await getDownloadURL(item); // Obtener la URL de descarga de la imagen
				this.img = imageUrl;
			} else {
				console.error(`No se encontró la imagen de la educación: ${name}`);
				alert(`No se encontró la imagen de la educación: ${this.nombreE}`);
			}
		} catch (error) {
			console.error('Error al obtener la imagen de la educación:', error);
			alert(`Error al obtener la imagen de la educación: ${this.nombreE}`);
		}
	}

}
