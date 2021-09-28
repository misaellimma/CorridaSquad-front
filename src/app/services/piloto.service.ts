import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { piloto } from '../entities/piloto';

@Injectable({
  providedIn: 'root'
})
export class PilotoService {

  url = "http://localhost:8080/piloto"

  constructor(private http: HttpClient) { }

  listar()
  {
    return this.http.get<piloto[]>(`${this.url}/listar`)
  }

  incluir(novoPiloto: piloto): Observable<piloto>
  {
    return this.http.post<piloto>(`${this.url}/incluir`, novoPiloto)
  }

  alterar(piloto: piloto): Observable<any>
  {
    return this.http.put<any>(`${this.url}/alterar`, piloto)
  }

  loadPiloto(id: number): Observable<piloto>
  {
    const getUrl = `${this.url}/${id}`
    return this.http.get<piloto>(getUrl)
  }
}
