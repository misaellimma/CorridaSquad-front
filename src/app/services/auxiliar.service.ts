import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { auxiliar } from '../entities/auxiliar';

@Injectable({
  providedIn: 'root'
})
export class AuxiliarService {

  url = "http://localhost:8080/auxiliar"

  constructor(private http: HttpClient) { }

  listar()
  {
    return this.http.get<auxiliar[]>(`${this.url}/listar`)
  }

  incluir(novoAuxiliar: auxiliar): Observable<auxiliar>
  {
    return this.http.post<auxiliar>(`${this.url}/incluir`, novoAuxiliar)
  }

  alterar(auxiliar: auxiliar): Observable<any>
  {
    return this.http.put<any>(`${this.url}/alterar`, auxiliar)
  }

  loadAuxiliar(id: number): Observable<auxiliar>
  {
    const getUrl = `${this.url}/${id}`
    return this.http.get<auxiliar>(getUrl)
  }
}
