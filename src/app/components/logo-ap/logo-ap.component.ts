import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {

  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    console.log('logo-ap -'+this.tokenService.getToken());
    if(this.tokenService.getToken()){
      this.isLogged = true
    }else{
      this.isLogged = false
    }
  }

  onLogOut(): void {
    this.tokenService.logOut()
    window.location.reload()
  }

  login(){
    this.router.navigate(['/login']);
  }

}
