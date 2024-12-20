import { persona } from './../../../../app/model/persona.model';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from './../../../../app/services/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from './../../../../app/services/image.service';
import { ref, list, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.scss'],
})
export class EditAboutComponent implements OnInit {
//   persona: persona = null;
persona: persona = new persona;
  url: string = '';
  urlBanner: string = '';

  constructor(
    private personaService: PersonaService,
    private activateRouter: ActivatedRoute,
    private router: Router,
    public imgService: ImageService
  ) {}

  ngOnInit(): void {
    this.getImagen();
    this.getBanner();
    const id = this.activateRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      (data) => {
        this.persona = data;
      },
      (err) => {
        alert('Error en editar Persona');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.persona.img = this.url;
    this.persona.imgBanner = this.urlBanner;
    this.personaService.update(id, this.persona).subscribe(
      (data) => {
        alert('Persona editada');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al editar Persona');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    this.borrarImagenes();
    const id = this.activateRouter.snapshot.params['id'];
    const name = 'perfil_' + id;
    this.imgService.uploadImage($event, name);
    this.getImagen();
  }

  getImagen() {
    const imgsRef = ref(this.imgService.storage, `imagen`);
    const id = this.activateRouter.snapshot.params['id'];
   /*  list(imgsRef)
      .then(async (response) => {
        this.url = await getDownloadURL(
          response.items.find((x) => x.name === 'perfil_' + id)
        );
      })
      .catch((error) =>
        console.log('No se pudo encontrar la imagen de Perfil')
      ); */
  }

  uploadBanner($event: any) {
    const name = 'banner_1';
    this.imgService.uploadImage($event, name);
    this.getBanner();
  }

  getBanner() {
    const imgsRef = ref(this.imgService.storage, `imagen`);
    /* list(imgsRef)
      .then(async (response) => {
        this.urlBanner = await getDownloadURL(
          response.items.find((x) => x.name === 'banner_1')
        );
      })
      .catch((error) =>
        console.log('No se pudo encontrar la imagen del Banner')
      ); */
  }

  borrarImagenes() {
 /*    this.url = null;
    this.urlBanner = null; */
  }
}
