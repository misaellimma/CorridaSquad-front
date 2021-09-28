import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { equipe } from '../entities/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  url = "http://localhost:8080/equipe"

  constructor(private http: HttpClient) { }

  listar()
  {
    return this.http.get<equipe[]>(`${this.url}/listar`)
  }

  incluir(novoEquipe: equipe): Observable<equipe>
  {
    return this.http.post<equipe>(`${this.url}/incluir`, novoEquipe)
  }

  alterar(equipe: equipe): Observable<any>
  {
    return this.http.put<any>(`${this.url}/alterar`, equipe)
  }

  loadEquipe(id: number): Observable<equipe>
  {
    const getUrl = `${this.url}/${id}`
    return this.http.get<equipe>(getUrl)
  }
}
