import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private url = 'http://localhost:8080/api/tarea/';

  constructor(private http: HttpClient) { }

  public getTarea(idTarea: string): Observable<any> {
    return this.http.get<any>(this.url + '/?idTarea=' + idTarea);
  }

  public getData(): Observable<any> {
    return this.http.get<any>(this.url + '/all');
  }

  public addTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.url, tarea);
  }

  public updateTarea(tarea: any): Observable<Tarea> {
    return this.http.put<Tarea>(this.url, tarea);
  }

  public deleteTarea(idTarea: string): Observable<{}> {
    return this.http.delete<Tarea>(this.url, {body: {idTarea}});
  }
}
