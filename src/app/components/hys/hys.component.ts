import { Component, OnInit } from '@angular/core';
import { HysService } from './../../services/hys.service';
import { Hys } from './../../model/hys';
import { TokenService } from './../../services/token.service';
@Component({
	selector: 'app-hys',
	templateUrl: './hys.component.html',
	styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
	skill: Hys[] = [];
	id!: number;

	constructor(
		private skillS: HysService,
		private tokenService: TokenService
	) { }
	isLogged = true;

	ngOnInit(): void {
		console.log('HysComponent');
		this.cargarSkills();
		if (this.tokenService.getToken()) {
			this.isLogged = true;
		} else {
			this.isLogged = false;
		}
		console.log('CargaSkills');
	}

	cargarSkills(): void {
		this.skillS.lista().subscribe((data) => {
			this.skill = data;
			console.log('skill:', this.skill);
		});
	}
	selectItem(item: any) {
		console.log('item');
		console.log(item);
	}
	delete(id: number): void {
		if (id != undefined) {
			console.error('ID no válido:', id);
			return;
		}

		if (confirm('¿Estás seguro de que deseas eliminar esta skill?')) {
			this.skillS.delete(id).subscribe(
				() => {
					console.log(`Skill con ID ${id} eliminada correctamente`, id);
					this.cargarSkills();
				},
				(err) => {
					console.error('Error al eliminar la skill:', err);
					alert('No se pudo borrar la skill');
				}
			);
		}
	}
}
