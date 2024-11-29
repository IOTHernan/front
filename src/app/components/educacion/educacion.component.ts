import { Educacion } from './../../model/educacion';
import { Component, OnInit } from '@angular/core';
import { EducacionService } from './../../services/educacion.service';
import { TokenService } from './../../services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss'],
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(
    private sEducacion: EducacionService,
    private sToken: TokenService
  ) { }

  isLogged = true;

  ngOnInit(): void {
    console.log('CargaEducacion');
    this.cargarEducacion();
    if (this.sToken.getToken()) {
      console.log("token true");
      this.isLogged = true;
    } else {
      console.log("token false");
      alert('no logueado');
      this.isLogged = false;
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
}
