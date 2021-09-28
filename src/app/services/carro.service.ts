import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carro } from '../entities/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  url = 'http://localhost:8080/carro'

  constructor(private http: HttpClient) { }


  loadCarro(id: number): Observable<carro>
  {
    const getUrl = `${this.url}/${id}`
    return this.http.get<carro>(getUrl)
  }

  listar()
  {
    return this.http.get<carro[]>(`${this.url}/listar`)
  }

  incluir(novoCarro: carro): Observable<carro>
  {
    return this.http.post<carro>(`${this.url}/incluir`, novoCarro)
  }

  alterar(carro: carro): Observable<any>
  {
    return this.http.put<any>(`${this.url}/alterar`, carro)
  }
}
