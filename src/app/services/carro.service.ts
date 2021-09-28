import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../entities/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  url = 'http://localhost:8080/carro'

  constructor(private http: HttpClient) { }


  loadCarro(id: number): Observable<Carro>
  {
    const getUrl = `${this.url}/${id}`
    return this.http.get<Carro>(getUrl)
  }

  listar()
  {
    return this.http.get<Carro[]>(`${this.url}/listar`)
  }

  incluir(novoCarro: Carro): Observable<Carro>
  {
    return this.http.post<Carro>(`${this.url}/incluir`, novoCarro)
  }

  alterar(carro: Carro): Observable<any>
  {
    return this.http.put<any>(`${this.url}/alterar`, carro)
  }
}
