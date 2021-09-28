import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auxiliar } from '../entities/auxiliar';

@Injectable({
  providedIn: 'root'
})
export class AuxiliarService {

  url = "http://localhost:8080/auxiliar"

  constructor(private http: HttpClient) { }

  listar()
  {
    return this.http.get<Auxiliar[]>(`${this.url}/listar`)
  }

  incluir(novoAuxiliar: Auxiliar): Observable<Auxiliar>
  {
    return this.http.post<Auxiliar>(`${this.url}/incluir`, novoAuxiliar)
  }

  alterar(auxiliar: Auxiliar): Observable<any>
  {
    return this.http.put<any>(`${this.url}/alterar`, auxiliar)
  }

  loadAuxiliar(id: number): Observable<Auxiliar>
  {
    const getUrl = `${this.url}/${id}`
    return this.http.get<Auxiliar>(getUrl)
  }
}
