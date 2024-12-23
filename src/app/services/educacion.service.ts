import { environment } from './../../environments/environment';
import { Educacion } from './../model/educacion';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = environment.URL + 'api/educacion/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.URL + 'lista')/*  + 'getAllEducacion'*/
  }

  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.URL + `${id}`)/* /detail */
  }

  public save(ed: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.URL + `create`, ed)
  }

  public update(id: number, ed: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, ed)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`)
  }
}
