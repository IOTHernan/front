import { Component, Input, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from './../../model/proyecto';
import { ProyectoService } from './../../services/proyecto.service';
import { TokenService } from '../../services/token.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-proyectos',
	templateUrl: './proyectos.component.html',
	styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
	proyecto: Proyecto[] = [];
	miPortfolio: any;
	modoEdicion: boolean = false;
	modoNuevoRegistro: boolean = false;
	i!: number;
	editID!: number;
	form: FormGroup;
	// @Input() isLogged!: boolean;

	constructor(
		private sProyecto: ProyectoService,
		private sToken: TokenService
	) {
		this.form = new FormGroup({
			titulo: new FormControl(['', [Validators.required, Validators.maxLength(2)]]),
			descripcion: new FormControl(['', [Validators.required, Validators.maxLength(2)]]),
			imagen: new FormControl(['', [Validators.required, Validators.maxLength(2)]])
		})
	}
	isLogged = false;

	ngOnInit(): void {
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

	/* 	onCrear(event: Event) {
			let objetoFormulario = this.form.controls;
			let keysForms = Object.keys(objetoFormulario);
			console.log("keysForm: ", keysForms);
			let valueForms = Object.values(objetoFormulario);
			console.log("valuesForm: ", valueForms);
			valueForms[0].setValue('');
			valueForms[1].setValue('');
			valueForms[2].setValue('');
			console.log("valueFormTitulo: ", valueForms[0].value);
			console.log("valueFormDescripcion: ", valueForms[1].value);
			console.log("valueFormImagen: ", valueForms[2].value);
			this.modoNuevoRegistro = true;
		}
	
		onEdit(id: any, i: number, event: Event) {
			this.editID = id;
			this.i = i;
			console.log("i", i);
			console.log("editID", this.editID);
			console.log("this.form.value: ", this.form.value);
			console.log("id: ", id); this.form.setValue({
				titulo: this.miPortfolio[i].titulo,
				descripcion: this.miPortfolio[i].descripcion,
				imagen: this.miPortfolio[i].imagen
			})
			console.log("this.form.value: ", this.form.value);
			this.modoEdicion = true;
		}
	
		onSaveEdit(event: Event) {
			event.preventDefault;
			this.datosPortfolio.putEducacion(this.form.value, this.editID).subscribe(data => {
				console.log("this.form.value: ", this.form.value);
				console.log("id: ", this.editID);
				console.log("PROYECTO method PUT Data Editada", data);
				this.datosPortfolio.obtenerOneDatosEducacion(this.editID).subscribe(data => {
					console.log("Dato: " + JSON.stringify(data));
					this.miPortfolio[this.i] = data;
					console.log("miPortfolio[i : ", this.miPortfolio[this.i]);
				});
			});
			this.modoEdicion = false;
		}
	
		onSaveNewNuevoRegistro(event: Event) {
			event.preventDefault;
			this.datosPortfolio.postProyecto(this.form.value).subscribe(data => {
				console.log("this.form.value: ", this.form.value);
				console.log("AcercaDe method post Data", data);
				this.datosPortfolio.obtenerDatosProyectos().subscribe(data => {
					this.miPortfolio = data;
				});
			});
			this.modoNuevoRegistro = false;
		}
	
		onDelete(i: number, event: Event) {
			console.log("ondelete", i);
	
	
			this.i = i;
			this.modoEdicion = false;
			event.preventDefault;
			Swal.fire({
				title: `¿ELIMINAR PROYECTO ${(this.miPortfolio[i].titulo).toUpperCase()}?`,
				text: "No podrá revertir los cambios.",
				icon: 'warning',
				confirmButtonColor: '#d33',
				confirmButtonText: 'Si, Eliminar.',
				showCancelButton: true,
				cancelButtonText: 'Cancelar',
				cancelButtonColor: '#00b5ff'
			}).then((result) => {
				if (result.isConfirmed) {
					this.datosPortfolio.deleteProyecto(this.miPortfolio[i].id).subscribe(data => {
						console.log("Borrando registro", data);
						this.datosPortfolio.obtenerDatosProyectos().subscribe(data => {
							this.miPortfolio = data;
						});
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
	
		onCancelNuevoRegistro() {
			this.modoNuevoRegistro = false;
		}
		onCancel(event: Event) {
			let objetoFormulario = this.form.controls;
			let keysForms = Object.keys(objetoFormulario);
			console.log("keysForm: ", keysForms);
			let valueForms = Object.values(objetoFormulario);
			console.log("valuesForm: ", valueForms);
			valueForms[0].setValue('');
			valueForms[1].setValue('');
			valueForms[2].setValue('');
			console.log("valueFormTitulo: ", valueForms[0].value);
			console.log("valueFormDescripcion: ", valueForms[1].value);
			console.log("valueFormImagen: ", valueForms[2].value);
			this.modoEdicion = false;
		}
	 */
}
