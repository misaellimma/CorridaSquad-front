import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from '../entities/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  url = "http://localhost:8080/servico"

  constructor(private http: HttpClient) { }

  listar()
  {
    return this.http.get<Servico[]>(`${this.url}/listar`)
  }

  incluir(novoservico: Servico): Observable<Servico>
  {
    return this.http.post<Servico>(`${this.url}/incluir`, novoservico)
  }

  alterar(servico: Servico): Observable<any>
  {
    return this.http.put<any>(`${this.url}/alterar`, servico)
  }

  loadservico(id: number): Observable<Servico>
  {
    const getUrl = `${this.url}/${id}`
    return this.http.get<Servico>(getUrl)
  }
  
}
