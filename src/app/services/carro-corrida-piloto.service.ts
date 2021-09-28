import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarroCorridaPiloto } from '../entities/carroCorridaPiloto';

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

  incluir(novoCarroCorridaPiloto: CarroCorridaPiloto): Observable<CarroCorridaPiloto>
  {
    return this.http.post<CarroCorridaPiloto>(`${this.url}/incluir`, novoCarroCorridaPiloto)
  }

  alterar(carroCorridaPiloto: CarroCorridaPiloto): Observable<any>
  {
    return this.http.put<any>(`${this.url}/alterar`, carroCorridaPiloto)
  }

  loadCarroCorridaPiloto(id: number): Observable<CarroCorridaPiloto>
  {
    const getUrl = `${this.url}/${id}`
    return this.http.get<CarroCorridaPiloto>(getUrl)
  }
}
