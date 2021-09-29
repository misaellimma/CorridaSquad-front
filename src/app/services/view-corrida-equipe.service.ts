import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewCorridaEquipe } from '../entities/view-corrida-equipe';

@Injectable({
  providedIn: 'root'
})
export class ViewCorridaEquipeService {

  url = "http://localhost:8080/ViewCorridaEquipe"

  constructor(private http: HttpClient) { }

  returnView()
  {
    return this.http.get<ViewCorridaEquipe[]>(`${this.url}/listar`)
  }

}
