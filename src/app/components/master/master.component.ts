import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from './../../services/auth.service';
// import { UsersService } from './../../services/users.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-master',
  animations: [ trigger('transformMenu', [ state('start', style({ transform: 'translateX(0)' })), transition('* => start', [ style({ transform: 'translateX(-100%)' }), animate('0.5s ease-in') ]) ]) ],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {
  // user$ = this.usersService.currentUserProfile$;

  constructor(
    // private authService: AuthService,
    // public usersService: UsersService,
    private router: Router
  ) {}

   ngOnInit() {
    console.log('MasterComponent...');
   }

   logout() {
    // this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    // });
  }
}
