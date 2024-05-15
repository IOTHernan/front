import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAcercaDe } from '../interfaces/iacercade';
import { ISkill } from '../interfaces/iskill';
import { IEducacion } from '../interfaces/ieducacion';
import { IExperiencia } from '../interfaces/iexperiencia';
import { IProyecto } from '../interfaces/iproyecto';
import { IPersona } from '../interfaces/ipersona';


@Injectable({
	providedIn: 'root'
})
export class PortfolioService {

	private apiUrl = "http://localhost:8080/api/";
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

	// *********************************************************************
	// **************   |   METHOD'S GET ALL    | **************************
	// *********************************************************************

	obtenerDatosAcercaDe(): Observable<any> {
		return this.http.get<any>(this.apiUrl + 'acercade');
	}
	obtenerDatosPersona(): Observable<any> {
		console.log('ObtenerDatosPersona');

		return this.http.get(this.apiUrl + 'persona/lista');
	}
	obtenerDatosEducacion(): Observable<IEducacion[]> {
		return this.http.get<IEducacion[]>(this.apiUrl + 'educacion');
	}


	obtenerDatosExperiencia(): Observable<IExperiencia> {
		return this.http.get<IExperiencia>(this.apiUrl + 'experiencia');
	}

	obtenerDatosProyectos(): Observable<IProyecto> {
		return this.http.get<IProyecto>(this.apiUrl + 'proyectos');
	}

	obtenerDatosSkills(): Observable<ISkill> {
		return this.http.get<ISkill>(this.apiUrl + 'skills');
	}

	// *********************************************************************
	// **************   |   METHOD'S GET ONE    | **************************
	// *********************************************************************

	obtenerOneDatosAcercaDe(id: number): Observable<any> {
		return this.http.get<any>(this.apiUrl + 'acercade/' + id);
	}

	obtenerOneDatosEducacion(id: number): Observable<IEducacion> {
		return this.http.get<IEducacion>(this.apiUrl + 'educacion/' + id);
	}

	obtenerOneDatosExperiencia(id: number): Observable<IExperiencia> {
		return this.http.get<IExperiencia>(this.apiUrl + 'experiencias/' + id);
	}

	obtenerOneDatosProyecto(id: number): Observable<IProyecto> {
		return this.http.get<IProyecto>(this.apiUrl + 'proyectos/' + id);
	}

	obtenerOneDatosSkill(id: number): Observable<ISkill> {
		return this.http.get<ISkill>(this.apiUrl + 'skills/' + id);
	}



	// *********************************************************************
	// **************   |   METHOD'S POST    | ******************************
	// *********************************************************************

	postAcercaDe(AcercaDe: any): Observable<any> {
		let AcercaDeJSON = JSON.stringify(AcercaDe);
		return this.http.post<any>(this.apiUrl + 'acercade', AcercaDeJSON, { headers: this.headers });
	}

	postEducacion(Educacion: IEducacion): Observable<IEducacion> {
		return this.http.post<IEducacion>(this.apiUrl + 'educacion', Educacion, { headers: this.headers });
	}

	postExperiencia(Experiencia: IExperiencia): Observable<IExperiencia> {
		return this.http.post<IExperiencia>(this.apiUrl + 'experiencias', Experiencia, { headers: this.headers });
	}

	postProyecto(Proyecto: IProyecto): Observable<IProyecto> {
		return this.http.post<IProyecto>(this.apiUrl + 'proyectos', Proyecto, { headers: this.headers });
	}

	postSkill(Skill: ISkill): Observable<ISkill> {
		return this.http.post<ISkill>(this.apiUrl + 'skills', Skill, { headers: this.headers });
	}

	// *********************************************************************
	// **************   |   METHOD'S PUT    | ******************************
	// *********************************************************************

	putAcercaDe(AcercaDe: any, id: Number): Observable<any> {
		return this.http.put<any>(this.apiUrl + 'acercade/' + id, AcercaDe, { headers: this.headers });
	}

	putExperiencia(Experiencia: IExperiencia, i: Number): Observable<IExperiencia> {
		return this.http.put<IExperiencia>(this.apiUrl + 'experiencias/' + i, Experiencia, { headers: this.headers });
	}

	putEducacion(Educacion: IEducacion, id: Number): Observable<IEducacion> {
		return this.http.put<IEducacion>(this.apiUrl + 'educacion/' + id, Educacion, { headers: this.headers });
	}

	putProyecto(Proyecto: IProyecto, id: Number): Observable<IProyecto> {
		return this.http.put<IProyecto>(this.apiUrl + 'proyectos/' + id, Proyecto, { headers: this.headers });
	}

	putSkill(Skill: ISkill, id: Number): Observable<ISkill> {
		return this.http.put<ISkill>(this.apiUrl + 'skills/' + id, Skill, { headers: this.headers });
	}


	// *********************************************************************
	// **************   |   METHOD'S DELETE    | ***************************
	// *********************************************************************

	deleteAcercaDe(id: Number): Observable<any> {
		return this.http.delete<any>(this.apiUrl + 'acercade/' + id, { headers: this.headers });
	}

	deleteEducacion(id: Number): Observable<IEducacion> {
		return this.http.delete<IEducacion>(this.apiUrl + 'educacion/' + id, { headers: this.headers });
	}

	deleteExperiencia(id: Number): Observable<IExperiencia> {
		return this.http.delete<IExperiencia>(this.apiUrl + 'experiencias/' + id, { headers: this.headers });
	}

	deleteProyecto(id: Number): Observable<IProyecto> {
		return this.http.delete<IProyecto>(this.apiUrl + 'proyectos/' + id, { headers: this.headers });
	}

	deleteSkill(id: Number): Observable<ISkill> {
		return this.http.delete<ISkill>(this.apiUrl + 'skills/' + id, { headers: this.headers });
	}

	holaChe(): Observable<any> {
		return this.http.get('localhost:8080/che/hola');
	}
}
