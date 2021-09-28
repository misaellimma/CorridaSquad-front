import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Piloto } from '../entities/piloto';

@Injectable({
  providedIn: 'root'
})
export class PilotoService {

  url = "http://localhost:8080/piloto"

  constructor(private http: HttpClient) { }

  listar()
  {
    return this.http.get<Piloto[]>(`${this.url}/listar`)
  }

  incluir(novoPiloto: Piloto): Observable<Piloto>
  {
    return this.http.post<Piloto>(`${this.url}/incluir`, novoPiloto)
  }

  alterar(piloto: Piloto): Observable<any>
  {
    return this.http.put<any>(`${this.url}/alterar`, piloto)
  }

  loadPiloto(id: number): Observable<Piloto>
  {
    const getUrl = `${this.url}/${id}`
    return this.http.get<Piloto>(getUrl)
  }
}
