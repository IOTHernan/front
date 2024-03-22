import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const TOKEN_KEY : string = "auth";
//const TOKEN_KEY : string = "token";
@Injectable({
	providedIn: 'root'
})
export class AutenticacionService {
/* 	urlLogin = "localhost:4200";
	urlNuevo = "localhost:4200";
	usuario: BehaviorSubject<any>;
 */
	constructor(private http: HttpClient,) {
		console.log('El servicio de autenticación está corriendo. ln14');
//		this.usuario = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('token') || '{}'));

	}
	/* login(credenciales:any):Observable<any>{
		console.log('DEBUG: autenticacionService - login - ln19:', credenciales);
		
		return this.http.post(this.urlLogin , credenciales).pipe(map(data => {
		console.log('Auth Service credenciales:',credenciales);
		console.log('Auth Service Mapeo de data:', data);
		this.usuario.next(data);
		return data;
		}));
	}
	registro(credenciales:any):Observable<any> {
		return this.http.post(this.urlNuevo, credenciales);
	} */

	token() {
		console.log('Auth Service token ln32:', sessionStorage.getItem('token') );
		return sessionStorage.getItem('token');
	}

	setToken(token:string): void {
		console.log('SetToken ln36');
		sessionStorage.setItem('token', token);
	}

	cerrarSesion(): void {
		window.sessionStorage.clear();
	  }
	removeToken(): void {
		sessionStorage.removeItem('token');
		console.log('Auth Service Token Removido ln41', sessionStorage.getItem('token'));
	}
	getToken(){
		return sessionStorage.getItem(TOKEN_KEY);
	  }
	  iniciarSesion(): void {
		window.sessionStorage.setItem(TOKEN_KEY, "solecita");
//window.sessionStorage.setItem(TOKEN_KEY, "token");
	  }
}
