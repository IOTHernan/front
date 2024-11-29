import { Component, OnInit } from '@angular/core';
import { persona } from './../../../app/model/persona.model';
import { TokenService } from './../../../app/services/token.service';
import { PersonaService } from './../../services/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
//   persona: persona = null
persona: persona = new persona;
  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona() {
    this.personaService.detail(1).subscribe(
      (data) => {
        this.persona = data;
      },
      (error) => {
        console.log('Error al cargar la persona', error);
      }
    );
  }

}
