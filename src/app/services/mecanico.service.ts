import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mecanico } from '../entities/mecanico';

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {

  url = "http://localhost:8080/mecanico"

  constructor(private http: HttpClient) { }

  listar()
  {
    return this.http.get<Mecanico[]>(`${this.url}/listar`)
  }

  incluir(novoMecanico: Mecanico): Observable<Mecanico>
  {
    return this.http.post<Mecanico>(`${this.url}/incluir`, novoMecanico)
  }

  alterar(mecanico: Mecanico): Observable<any>
  {
    return this.http.put<any>(`${this.url}/alterar`, mecanico)
  }

  loadMecanico(id: number): Observable<Mecanico>
  {
    const getUrl = `${this.url}/${id}`
    return this.http.get<Mecanico>(getUrl)
  }

}
