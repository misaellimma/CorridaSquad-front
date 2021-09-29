import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViewQuantidadeCarroCorridaComponent } from '../components/view-quantidade-carro-corrida/view-quantidade-carro-corrida.component';
import { ViewQuantidadeCarroCorrida } from '../entities/viewQuantidadeCarroCorrida';

@Injectable({
  providedIn: 'root'
})
export class ViewQuantidadeCarroCorridaService {
  
  url = "http://localhost:8080/quantidade_carro_corrida"

  constructor(private http: HttpClient) { }

  getView()
  {
    return this.http.get<ViewQuantidadeCarroCorrida[]>(`${this.url}/listar`)
  }
}
