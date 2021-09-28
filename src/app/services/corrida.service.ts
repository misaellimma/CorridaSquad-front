import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Corrida } from '../entities/corrida';

const url = "http://localhost:8080/corrida"

@Injectable({
  providedIn: 'root'
})
export class CorridaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Corrida[]>{
    return this.http.get<Corrida[]>(`${url}/listar`);
  }

  getId(id:number): Observable<Corrida>{
    return this.http.get(`${url}/listar/${id}`);
  }

  create(data:any): Observable<any>{
    console.log(data)
    return this.http.post(`${url}/incluir`,data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${url}/alterar/${id}`, data);
  }
}
