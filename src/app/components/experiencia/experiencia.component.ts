import { Component, Input, Output, OnInit } from '@angular/core';
import { Experiencia } from '../../model/experiencia';
import { ExperienciaService } from './../../services/experiencia.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../../services/token.service';

@Component({
	selector: 'app-experiencia',
	templateUrl: './experiencia.component.html',
	styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
	delete(arg0: any) {
		throw new Error('Method not implemented.');
	}
	experiencia: Experiencia[] = [];
	// miPortfolio: any;
	// modoEdicion: boolean = false;
	// modoNuevoRegistro: boolean = false;
	// i!: number;
	// editID!: number;
	form: FormGroup;
	id: any;
	// @Input() isLogged!: boolean;


	constructor(
		private sExperiencia: ExperienciaService,
		private sToken: TokenService
	) {
		this.form = new FormGroup({
			ubicacion: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
			puesto: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
			periodo: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
			empresa: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
			actividades: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
			// imagen: new FormControl(['', [Validators.required, Validators.minLength(2)]])
		})
	}
	isLogged = true;

	ngOnInit(): void {
		console.log("EXPERIENCIA component");
		this.cargarExperiencia();
		if (this.sToken.getToken()) {
			this.isLogged = true;
			console.log('isLogged');
		} else {
			console.log('isLogged false');
			this.isLogged = false;
		}
		/*   this.datosPortfolio.obtenerDatosExperiencia().subscribe(data => {
			console.log('Experiencias:',data);

			this.miPortfolio=data;
			console.log(this.miPortfolio);

		  });
		 */
	}

	cargarExperiencia(): void {
		this.sExperiencia.lista().subscribe((data) => {
			this.experiencia = data;
			console.log(this.experiencia);
		});
	}
	selectItem(item: any) {
		console.log(item);
	}
	/*
		onCrear(event: Event) {
			let objetoFormulario = this.form.controls;
			let keysForms = Object.keys(objetoFormulario);
			console.log("keysForm: ", keysForms);
			let valueForms = Object.values(objetoFormulario);
			console.log("valuesForm: ", valueForms);
			valueForms[0].setValue('');
			valueForms[1].setValue('');
			valueForms[2].setValue('');
			valueForms[3].setValue('');
			valueForms[4].setValue('');
			// valueForms[5].setValue('');
			console.log("valueFormDetalles: ", valueForms[0].value);
			console.log("valueFormEstado: ", valueForms[1].value);
			console.log("valueFormInstitucion: ", valueForms[2].value);
			console.log("valueFormPeriodo: ", valueForms[3].value);
			console.log("valueFormTitulo: ", valueForms[4].value);
			// console.log("valueFormImagen: ", valueForms[5].value);
			this.modoNuevoRegistro = true;
		}
		onEdit(id: any, i: number, event: Event) {
			this.editID = id;
			this.i = i;
			console.log("i", i);
			console.log("editID", this.editID);
			console.log("this.form.value: ", this.form.value);
			console.log("id: ", id); this.form.setValue({
				detalles: this.miPortfolio[i].detalles,
				estado: this.miPortfolio[i].estado,
				institucion: this.miPortfolio[i].institucion,
				periodo: this.miPortfolio[i].periodo,
				titulo: this.miPortfolio[i].titulo,
				// imagen: this.miPortfolio[i].imagen
			})
			console.log("this.form.value: ", this.form.value);
			this.modoEdicion = true;
		}

		onSaveEdit(event: Event) {
			event.preventDefault;
			this.datosPortfolio.putEducacion(this.form.value, this.editID).subscribe(data => {
				console.log("this.form.value: ", this.form.value);
				console.log("id: ", this.editID);
				console.log("EDUCACIÓN method PUT Data Editada", data);
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
			this.datosPortfolio.postEducacion(this.form.value).subscribe(data => {
				console.log("this.form.value: ", this.form.value);
				console.log("AcercaDe method post Data", data);
				this.datosPortfolio.obtenerDatosEducacion().subscribe(data => {
					this.miPortfolio = data;
				});
			});
			this.modoNuevoRegistro = false;
		}

		onDelete(i: number, event: Event) {
			console.log("ondelete",i);
			this.i = i;
			this.modoEdicion = false;
			event.preventDefault;
			Swal.fire({
				title: `¿ELIMINAR EDUCACIÓN ${(this.miPortfolio[i].titulo).toUpperCase()}?`,
				text: "No podrá revertir los cambios.",
				icon: 'warning',
				confirmButtonColor: '#d33',
				confirmButtonText: 'Si, Eliminar.',
				showCancelButton: true,
				cancelButtonText: 'Cancelar',
				cancelButtonColor: '#00b5ff'
			}).then((result) => {
				if (result.isConfirmed) {
					this.datosPortfolio.deleteEducacion(this.miPortfolio[i].id).subscribe(data => {
						console.log("Borrando registro", data);
						this.datosPortfolio.obtenerDatosEducacion().subscribe(data => {
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
			valueForms[3].setValue('');
			valueForms[4].setValue('');
			valueForms[5].setValue('');
			console.log("valueFormDetalles: ", valueForms[0].value);
			console.log("valueFormEstado: ", valueForms[1].value);
			console.log("valueFormInstitucion: ", valueForms[2].value);
			console.log("valueFormPeriodo: ", valueForms[3].value);
			console.log("valueFormTitulo: ", valueForms[4].value);
			console.log("valueFormImagen: ", valueForms[5].value);
			this.modoEdicion = false;
		}
	 */
}
