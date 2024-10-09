import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { IAcercaDe } from '../interfaces/iacercade';
import { Hys } from './../model/hys';
import { Educacion } from './../model/educacion';
import { Experiencia } from './../model/experiencia';
import { Proyecto } from './../model/proyecto';
import { persona } from './../model/persona.model';


@Injectable({
	providedIn: 'root'
})
export class PortfolioService {

	private apiUrl = "http://localhost:8080/";
	//headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;

	// Headers para POST, PUT Y DELETE.
	headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});


	constructor(private http: HttpClient) { }

	obtenerDatos(): Observable<any> {
		return this.http.get("./../../assets/data/data.json");
	}

	// **************   |   METHOD'S GET ALL    | **************************

	obtenerDatosAcercaDe(): Observable<any> {
		return this.http.get<any>(this.apiUrl + 'acercade');
	}
	obtenerDatosPersona(): Observable<any> {
		console.log('ObtenerDatosPersona');
		return this.http.get(this.apiUrl + 'persona/lista');
	}
	obtenerDatosEducacion(): Observable<Educacion[]> {
		return this.http.get<Educacion[]>(this.apiUrl + 'educacion/lista');
	}
	obtenerDatosExperiencia(): Observable<Experiencia> {
		return this.http.get<Experiencia>(this.apiUrl + 'experiencia');
	}
	obtenerDatosProyectos(): Observable<Proyecto> {
		return this.http.get<Proyecto>(this.apiUrl + 'proyectos');
	}
	obtenerDatosHyss(): Observable<Hys> {
		return this.http.get<Hys>(this.apiUrl + 'Hys');
	}

	// **************   |   METHOD'S GET ONE    | **************************

	obtenerOneDatosAcercaDe(id: number): Observable<any> {
		return this.http.get<any>(this.apiUrl + 'acercade/' + id);
	}
	obtenerOneDatosEducacion(id: number): Observable<Educacion> {
		return this.http.get<Educacion>(this.apiUrl + 'educacion/' + id);
	}
	obtenerOneDatosExperiencia(id: number): Observable<Experiencia> {
		return this.http.get<Experiencia>(this.apiUrl + 'experiencias/' + id);
	}
	obtenerOneDatosProyecto(id: number): Observable<Proyecto> {
		return this.http.get<Proyecto>(this.apiUrl + 'proyectos/' + id);
	}
	obtenerOneDatosHys(id: number): Observable<Hys> {
		return this.http.get<Hys>(this.apiUrl + 'Hys/' + id);
	}

	// **************   |   METHOD'S POST    | ******************************

	postAcercaDe(AcercaDe: any): Observable<any> {
		let AcercaDeJSON = JSON.stringify(AcercaDe);
		return this.http.post<any>(this.apiUrl + 'acercade', AcercaDeJSON, { headers: this.headers });
	}
	postEducacion(Educacion: Educacion): Observable<Educacion> {
		return this.http.post<Educacion>(this.apiUrl + 'educacion', Educacion, { headers: this.headers });
	}
	postExperiencia(Experiencia: Experiencia): Observable<Experiencia> {
		return this.http.post<Experiencia>(this.apiUrl + 'experiencias', Experiencia, { headers: this.headers });
	}
	postProyecto(Proyecto: Proyecto): Observable<Proyecto> {
		return this.http.post<Proyecto>(this.apiUrl + 'proyectos', Proyecto, { headers: this.headers });
	}
	postHys(Hys: Hys): Observable<Hys> {
		return this.http.post<Hys>(this.apiUrl + 'Hys', Hys, { headers: this.headers });
	}

	// **************   |   METHOD'S PUT    | ******************************

	putAcercaDe(AcercaDe: any, id: Number): Observable<any> {
		return this.http.put<any>(this.apiUrl + 'acercade/' + id, AcercaDe, { headers: this.headers });
	}
	putExperiencia(Experiencia: Experiencia, i: Number): Observable<Experiencia> {
		return this.http.put<Experiencia>(this.apiUrl + 'experiencias/' + i, Experiencia, { headers: this.headers });
	}
	putEducacion(Educacion: Educacion, id: Number): Observable<Educacion> {
		return this.http.put<Educacion>(this.apiUrl + 'educacion/' + id, Educacion, { headers: this.headers });
	}
	putProyecto(Proyecto: Proyecto, id: Number): Observable<Proyecto> {
		return this.http.put<Proyecto>(this.apiUrl + 'proyectos/' + id, Proyecto, { headers: this.headers });
	}
	putHys(Hys: Hys, id: Number): Observable<Hys> {
		return this.http.put<Hys>(this.apiUrl + 'Hys/' + id, Hys, { headers: this.headers });
	}

	// **************   |   METHOD'S DELETE    | ***************************

	deleteAcercaDe(id: Number): Observable<any> {
		return this.http.delete<any>(this.apiUrl + 'acercade/' + id, { headers: this.headers });
	}
	deleteEducacion(id: Number): Observable<Educacion> {
		return this.http.delete<Educacion>(this.apiUrl + 'educacion/' + id, { headers: this.headers });
	}
	deleteExperiencia(id: Number): Observable<Experiencia> {
		return this.http.delete<Experiencia>(this.apiUrl + 'experiencias/' + id, { headers: this.headers });
	}
	deleteProyecto(id: Number): Observable<Proyecto> {
		return this.http.delete<Proyecto>(this.apiUrl + 'proyectos/' + id, { headers: this.headers });
	}
	deleteHys(id: Number): Observable<Hys> {
		return this.http.delete<Hys>(this.apiUrl + 'Hys/' + id, { headers: this.headers });
	}

	holaChe(): Observable<any> {
		return this.http.get('localhost:8080/che/hola');
	}
}
