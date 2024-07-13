import { Component, OnInit } from '@angular/core';
import { HysService } from './../../services/hys.service';
  import { Hys } from './../../model/hys';
    import { TokenService } from './../../services/token.service';
@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent  implements OnInit {
  miPortfolio: any;
  skill: Hys[] = [];
  
  constructor(
    private skillS: HysService, 
    private tokenService: TokenService
  ) {}
    isLogged = false;
  
    ngOnInit(): void {
      this.cargarSkills();
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }
  
    cargarSkills(): void {
      this.skillS.lista().subscribe((data) => {
        this.skill = data;
      });
    }
  
    delete(id: number) {
      if (id != undefined) {
        this.skillS.delete(id).subscribe(
          (data) => {
            this.cargarSkills();
          },
          (err) => {
            alert('No se pudo borrar la skill');
          }
        );
      }
    }
  }
  