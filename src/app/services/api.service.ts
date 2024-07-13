import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private apiUrl = 'http://localhost:8080/api'; // URL de tu API
	//headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;

	// Headers para POST, PUT Y DELETE.
	headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});

	constructor(private http: HttpClient) { }

	getDatos(): Observable<any> {
		return this.http.get<any>(`${this.apiUrl}/datos`);
	}

	/* getDatosEducacion(): Observable<any> {
		console.log('[education]');
		return this.http.get<any>(this.apiUrl+'/educacion');
	} */

	getDatosEducacion() {
		this.http.get<any>('http://localhost:8080/api/educacion')
		  .subscribe(
			(data) => {
			  console.log('Datos de educación:', data);
			  // Aquí puedes procesar los datos recibidos
			},
			(error) => {
			  console.error('Error al obtener datos de educación:', error);
			}
		  );
	  }
	// Agrega métodos para otras operaciones CRUD, como postDatos(), updateDatos(), deleteDatos(), etc.
}
