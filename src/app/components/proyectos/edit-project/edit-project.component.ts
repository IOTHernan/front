import { Component, OnInit } from '@angular/core';
import { Proyecto } from './../../../../app/model/proyecto';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from './../../../../app/services/image.service';
import { ProyectoService } from './../../../../app/services/proyecto.service';
import { ref, list, getDownloadURL } from '@angular/fire/storage';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
})
export class EditProjectComponent implements OnInit {
//   proyecto: Proyecto = null;
proyecto:any;
id!: number;
nombreP: string = '';
descripcionP: string = '';
fecha: string = '';
link: string = '';
img: string = '';
repo: string = '';
url: string = '';
private routeSub!: Subscription;


  constructor(
    private sProyecto: ProyectoService,
    private activateRouter: ActivatedRoute,
    private router: Router,
    public imgService: ImageService
  ) {}

  ngOnInit(): void {
/*     const id = this.activateRouter.snapshot.params['id'];
    if (id) {
      this.sProyecto.detail(id).subscribe(
        (data) => {
          Proyecto = data;
          this.getImagen();
        },
        (err) => {
          alert('Error en editar Proyecto');
          this.router.navigate(['']);
        }
      );
    } else {
      alert('ID de proyecto no válido');
      this.router.navigate(['']);
    } */
   this.routeSub = this.activateRouter.params.subscribe(params => {
    this.id = params['id'];
   } );
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  onUpdate(): void {
   /*  const id = this.activateRouter.snapshot.params['id'];
    this.img = this.url;
    this.sProyecto.update(id, this.proyecto).subscribe(
      (data) => {
        alert('Proyecto editado');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error en editar Proyecto');
        this.router.navigate(['']);
      }
    ); */
    this.proyecto.img = this.img; // Asigna la imagen al proyecto

    this.sProyecto.update(this.id, this.proyecto).subscribe(
      (data) => {
        alert('Proyecto editado correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        console.error('Error al editar Proyecto:', err);
        alert('Ocurrió un error al editar el Proyecto');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    this.url = '';
    const name = 'proyecto_' + this.nombreP;
    this.imgService.uploadImage($event, name);
    setTimeout(() => {
      this.getImagen();
    }, 3000);
  }

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
