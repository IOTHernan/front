import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup;

  constructor(private userService: UserService,
    private router: Router
    ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
      console.log("[Register]");
      
  }

  onSubmit() {
    console.log(this.formReg.value);
    this.userService.register(this.formReg.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/login']);  
    })
    .catch(error => console.error(error));
    
    
  }
}
