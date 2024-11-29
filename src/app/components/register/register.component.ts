import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService,
    private router: Router
  ) {
    this.formReg = this.formBuilder.group({
      nombres: new FormControl(['', [Validators.required, Validators.maxLength(2)]]),
      apellido: new FormControl(['', [Validators.required, Validators.maxLength(2)]]),
      fecha_nacimiento: new FormControl(),
      nacionalidad: new FormControl(),
      mail: new FormControl(),
      password: new FormControl(),
      sobre_mi: new FormControl(),
      ocupacion: new FormControl(),
      bannerUrl: new FormControl(),
      image_background_header: new FormControl(),
      image_perfil: new FormControl(),
      linkedinUrl: new FormControl(),
      githubUrl: new FormControl(),
      descripcion: new FormControl(),
      imgUrl: new FormControl()

    })
  }

  ngOnInit(): void {
    console.log("[CHE-Register]");

  }

  onSubmit() {
    console.log(this.formReg.value);
    /* this.usersService.register(this.formReg.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/login']);
    })
    .catch(error => console.error(error));

     */
  }
}
