import { Educacion } from './../../model/educacion';
import { Component, OnInit } from '@angular/core';
import { EducacionService } from './../../services/educacion.service';
import { TokenService } from './../../services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss'],
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];
  i!: number;

  constructor(
    private sEducacion: EducacionService,
    private sToken: TokenService
  ) { }

  isLogged = false;

  ngOnInit(): void {
    console.log('CargaEducacion');
    this.cargarEducacion();
    if (this.sToken.getToken()) {
      console.log("token true");
      this.isLogged = true;
    } else {
      console.log("token false");
      alert('no logueado');
      this.isLogged = true;
    }
  }

  selectItem(item: any) {
    console.log("+-----------------------------------------+");
    console.log(item);
    console.log("+-----------------------------------------+");

  }
  cargarEducacion(): void {
    this.sEducacion.lista().subscribe((data) => {
      this.educacion = data;
      console.log('This education: ', this.educacion);
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

onDelete(i: number, event: Event) {
			console.log("ondelete",i);
			this.i = i;
			// this.modoEdicion = false;
			event.preventDefault;
			Swal.fire({
				title: `¿ELIMINAR EDUCACIÓN ${(this.educacion[i].titulo).toUpperCase()}?`,
				text: "No podrá revertir los cambios.",
				icon: 'warning',
				confirmButtonColor: '#d33',
				confirmButtonText: 'Si, Eliminar.',
				showCancelButton: true,
				cancelButtonText: 'Cancelar',
				cancelButtonColor: '#00b5ff'
			}).then((result) => {
				if (result.isConfirmed) {
					this.sEducacion.delete(i).subscribe(data => {
						console.log("Borrando registro", data);
						this.cargarEducacion();
					});
					Swal.fire({
						title: 'ITEM ELIMINADO',
						icon: 'success',
						showConfirmButton: false,
						timer: 1000
					})
				}
			})
		}

}
