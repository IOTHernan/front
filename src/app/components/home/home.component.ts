import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user$ = this.usersService.user$;
  isLoggedIn$ = this.usersService.isLoggedIn$;
    constructor(private authService: AuthService, private usersService: UsersService) {
      this.user$ = this.usersService.user$;
      this.isLoggedIn$ = this.usersService.isLoggedIn$;
}


  ngOnInit(): void {
    console.log('HomeComponent ngOnInit');
    console.log('users:', this.user$);
    console.log('isLoggedIn:', this.isLoggedIn$);
  }
}
