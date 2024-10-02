import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ref, list, getDownloadURL } from '@angular/fire/storage';

import { HysService } from './../../../services/hys.service';
import { Hys } from './../../../../app/model/hys';
import { ImageService } from './../../../../app/services/image.service';

@Component({
  selector: 'app-edit-hys',
  templateUrl: './edit-hys.component.html',
  styleUrls: ['./edit-hys.component.css'],
})
export class EditHysComponent implements OnInit {
  skill: Hys | null = null; // Cambiado de array a un solo objeto
  url: string = '';

  constructor(
    private skillS: HysService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imgService: ImageService
  ) {}

  ngOnInit(): void {
    this.cargarSkills();
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      (data) => {
        this.skill = data;
        this.getImagen();
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }

  cargarSkills(): void {
    this.skillS.lista().subscribe((data) => {
      // Ajustado para manejar el array si es necesario
      this.skill = data.length > 0 ? data[0] : null;
      console.log('skill:', this.skill);
    });
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    if (this.skill) {
      this.skill.img = this.url; // Asegúrate de que 'img' sea una propiedad válida en 'Hys'
      this.skillS.update(id, this.skill).subscribe(
        (data) => {
          alert('Skill editada');
          this.router.navigate(['']);
        },
        (err) => {
          alert('Error al modificar la skill');
          this.router.navigate(['']);
        }
      );
    }
  }

  uploadImage($event: any) {
    this.url = '';
    if (this.skill) {
      const name = this.skill.nombre;
      this.imgService.uploadImage($event, name);
      setTimeout(() => {
        this.getImagen();
      }, 2000); // Ajustado para garantizar que la imagen esté disponible
    }
  }

  getImagen() {
    if (this.skill) {
      const imgsRef = ref(this.imgService.storage, `imagen`);
      list(imgsRef)
        .then(async (response) => {
          const imgRef = response.items.find((x) => x.name === this.skill?.nombre);
          if (imgRef) {
            this.url = await getDownloadURL(imgRef);
          } else {
            console.log('No se pudo encontrar la imagen de la skill con nombre:', this.skill?.nombre);
          }
        })
        .catch((error) => console.log('Error al obtener la imagen:', error));
    }
  }

}

