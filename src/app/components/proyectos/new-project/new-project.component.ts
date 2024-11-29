import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from './../../../../app/model/proyecto';
import { ImageService } from './../../../../app/services/image.service';
import { ProyectoService } from '../../../../app/services/proyecto.service';
import { ref, list, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';
  fecha: string = '';
  link: string = '';
  img: string = '';
  repo: string = '';

  constructor(
    private sProyecto: ProyectoService,
    private router: Router,
    public imgService: ImageService
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const exp = new Proyecto(
      this.nombreP,
      this.descripcionP,
      this.fecha,
      this.link,
      this.img,
      this.repo
    );
    this.sProyecto.save(exp).subscribe(
      (data) => {
        alert('Proyecto creado correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error en crear Proyecto');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    // this.img = null;
    this.img = '';
    const name = 'proyecto_' + this.nombreP;
    this.imgService.uploadImage($event, name);
    setTimeout(() => {
      this.getImagen();
    }, 4000);
  }

/*   getImagen() {
    const imgsRef = ref(this.imgService.storage, `imagen`);
    const name = 'proyecto_' + this.nombreP;
    list(imgsRef)
      .then(async (response) => {
        this.img = await getDownloadURL(
          response.items.find((x) => x.name === name)
        );
      })
      .catch((error) =>
        console.log(
          'No se pudo encontrar la imagen del proyecto de id:' + this.nombreP
        )
      );
  }
 */
async getImagen() {
    try {
      const imgsRef = ref(this.imgService.storage, `imagen`);
      const name = 'proyecto_' + this.nombreP;

      const response = await list(imgsRef);
      const foundItem = response.items.find((x) => x.name === name);

      if (foundItem) {
        this.img = await getDownloadURL(foundItem);
      } else {
        console.log(`No se encontró la imagen para el proyecto con ID: ${this.nombreP}`);
        // Aquí puedes manejar el caso de que no se encontró la imagen
      }
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
      // Aquí puedes manejar el error de la forma que consideres apropiada
    }
  }

}
