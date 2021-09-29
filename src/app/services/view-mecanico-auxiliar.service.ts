import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewMecanicoAuxiliar } from '../entities/viewMecanicoAuxiliar';

@Injectable({
  providedIn: 'root'
})
export class ViewMecanicoAuxiliarService {
  private url = "http://localhost:3000/mecanicoauxiliar"

  constructor(private http : HttpClient) { }

  listar(): Observable<ViewMecanicoAuxiliar[]>{
    return this.http.get<ViewMecanicoAuxiliar[]>(`${this.url}`)
  }
}
