import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from './../../../model/educacion';
import { EducacionService } from './../../../services/educacion.service';
import { ImageService } from './../../../services/image.service';
import { Storage, ref, list, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.scss'],
})
export class EditEducacionComponent implements OnInit {
  educ: Educacion = new Educacion();
  url: string = '';

  constructor(
    private sEducacion: EducacionService,
    private activateRouter: ActivatedRoute,
    private router: Router,
    private imgService: ImageService,
    private storage: Storage
  ) { }

  ngOnInit(): void {
    console.log('ngOnInit edit-educacion');
    const id = this.activateRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe((data) => {
      this.educ = data;
      this.url = this.educ.img;
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
    this.sEducacion.update(id, this.educ).subscribe(() => {
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
    const name = this.educ.nombreE;/*  'education_' + */
    try {
      await this.imgService.uploadImage(file, name);
      console.log('Imagen subida con éxito');
      await this.getImagen();
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      alert('Error al subir la imagen');
    }
  }

  async getImagen(name?: string): Promise<void> {
    try {
      console.log('getImagen:', name);
      const imgsRef = ref(this.storage, '');/* imagen */
      console.log('imgsRef:', imgsRef);
      const response = await list(imgsRef);
      console.log('response:', response);
      const imageName = name || this.educ.img;
      // const imageName = name || this.educ.nombreE;/* 'educacion_' + */
      console.log('imageName:', imageName);
      const imageItem = response.items.find((x) => x.name === imageName);
      console.log('imageItem:', imageItem);
      if (imageItem) {
        this.url = await getDownloadURL(imageItem);
      } else {
        //	console.log('No se pudo encontrar la imagen de la educación: ' + this.educ.nombreE);
        console.log('No se pudo encontrar la imagen de la educación: ' + this.educ.img);
      }
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
    }
  }
}
