import { Component, OnInit } from '@angular/core';
import { persona } from './../../model/persona.model';
import { TokenService } from './../../services/token.service';
import { PersonaService } from './../../services/persona.service';

@Component({
	selector: 'app-acercade',
	templateUrl: './acercade.component.html',
	styleUrls: ['./acercade.component.css'],
})
export class AcercadeComponent implements OnInit {
	persona: persona = new persona();

	constructor(
		public personaService: PersonaService,
		private tokenService: TokenService
	) { }

	isLogged = false;

	ngOnInit(): void {
		this.cargarPersona();
		if (this.tokenService.getToken()) {
			this.isLogged = true;
		} else {
			this.isLogged = false;
		}
	}

	cargarPersona(): void {
		this.personaService.detail(1).subscribe((data) => {
				this.persona = data;
			});
	}

}
