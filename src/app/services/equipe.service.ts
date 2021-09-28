import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../entities/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  url = "http://localhost:8080/equipe"

  constructor(private http: HttpClient) { }

  listar()
  {
    return this.http.get<Equipe[]>(`${this.url}/listar`)
  }

  incluir(novoEquipe: Equipe): Observable<Equipe>
  {
    return this.http.post<Equipe>(`${this.url}/incluir`, novoEquipe)
  }

  alterar(equipe: Equipe): Observable<any>
  {
    console.log(JSON.stringify(equipe))
    return this.http.put<any>(`${this.url}/alterar`, equipe)
  }

  loadEquipe(id: number): Observable<Equipe>
  {
    const getUrl = `${this.url}/${id}`
    return this.http.get<Equipe>(getUrl)
  }
}
