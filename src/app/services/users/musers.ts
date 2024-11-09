import { Injectable, OnInit } from '@angular/core';
import { Users } from './../../model/users.model'; // Ajusta la ruta según donde esté tu modelo

@Injectable({
	providedIn: 'root'
})

export class UserComponent implements OnInit {
  user = Users;
  constructor() {
    const user = new Users('1', 'juan.perez@example.com','Juan','Perez','Juan Perez', '','','');
    this.saveUserToLocalStorage(user);
  }
  ngOnInit(): void {
      console.log(this.user);

  }

  saveUserToLocalStorage(user: Users): void {
    // Convertir el objeto a JSON y guardarlo en localStorage
    localStorage.setItem('user', JSON.stringify(user));
  }

  loadUserFromLocalStorage(): Users | null {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      return JSON.parse(userJson);
    }
    return null; // O manejarlo de otra manera si no hay usuario
  }
}
