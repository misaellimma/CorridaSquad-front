import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { servico } from '../entities/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  url = "http://localhost:8080/servico"

  constructor(private http: HttpClient) { }

  listar()
  {
    return this.http.get<servico[]>(`${this.url}/listar`)
  }

  incluir(novoservico: servico): Observable<servico>
  {
    return this.http.post<servico>(`${this.url}/incluir`, novoservico)
  }

  alterar(servico: servico): Observable<any>
  {
    return this.http.put<any>(`${this.url}/alterar`, servico)
  }

  loadservico(id: number): Observable<servico>
  {
    const getUrl = `${this.url}/${id}`
    return this.http.get<servico>(getUrl)
  }
  
}
