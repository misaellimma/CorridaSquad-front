import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carroCorridaPiloto } from '../entities/carroCorridaPiloto';

@Injectable({
  providedIn: 'root'
})
export class CarroCorridaCarroCorridaPilotoService {

  url = "http://localhost:8080/carrocorridapiloto"

  constructor(private http: HttpClient) { }

  listar()
  {
    return this.http.get<[]>(`${this.url}/listar`)
  }

  incluir(novoCarroCorridaPiloto: carroCorridaPiloto): Observable<carroCorridaPiloto>
  {
    return this.http.post<carroCorridaPiloto>(`${this.url}/incluir`, novoCarroCorridaPiloto)
  }

  alterar(carroCorridaPiloto: carroCorridaPiloto): Observable<any>
  {
    return this.http.put<any>(`${this.url}/alterar`, carroCorridaPiloto)
  }

  loadCarroCorridaPiloto(id: number): Observable<carroCorridaPiloto>
  {
    const getUrl = `${this.url}/${id}`
    return this.http.get<carroCorridaPiloto>(getUrl)
  }
}
