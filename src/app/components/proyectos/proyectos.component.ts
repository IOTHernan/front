import { Component, Input, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from './../../model/proyecto';
import { ProyectoService } from './../../services/proyecto.service';
import { TokenService } from '../../services/token.service';

@Component({
	selector: 'app-proyectos',
	templateUrl: './proyectos.component.html',
	styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
	proyecto: Proyecto[] = [];

	constructor(
		private sProyecto: ProyectoService,
		private sToken: TokenService
	) {	}

	isLogged = false;

	ngOnInit(): void {
		console.log("Proyectos component");
		this.cargarProyectos();
		if (this.sToken.getToken()) {
			this.isLogged = true;
		} else {
			this.isLogged = false;
		}
	}

	cargarProyectos(): void {
		this.sProyecto.lista().subscribe((data) => {
			this.proyecto = data;
			console.log(this.proyecto);
		});
	}

	delete(id?: number) {
		if (id !== undefined) {
			this.sProyecto.delete(id).subscribe(
				(data) => {
					this.cargarProyectos();
				},
				(err) => alert('No se pudo borrar el proyecto')
			);
		}
	}

	selectItem(item: any) {
		console.log(item);
	}
}
