import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private apiUrl = 'http://localhost:8080/api'; // URL de tu API

	constructor(private http: HttpClient) { }

	getDatos(): Observable<any> {
		return this.http.get<any>(`${this.apiUrl}/datos`);
	}

	getDatosEducacion(): Observable<any> {
		console.log('[education]');
		return this.http.get<any>(`${this.apiUrl}/educacion`);
	}

	// Agrega métodos para otras operaciones CRUD, como postDatos(), updateDatos(), deleteDatos(), etc.
}
