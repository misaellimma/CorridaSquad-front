import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from 'src/app/entities/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  boolPostForm: boolean = false
  carro: Carro | undefined
  carros: Carro[] = []

  constructor(private carroService: CarroService) { }

  ngOnInit(): void {
    this.listar()
  }

  showPostForm(){
    this.boolPostForm = true
  }

  hidePostForm(){
    this.boolPostForm = false
  }

  save(descricao: string, numero: string, idEquipe: string){
    this.carro = {
      id: 0,
      descricao: descricao,
      numero: numero,
      id_equipe: Number(idEquipe)
    }
    this.carroService.incluir(this.carro).subscribe(carro => {this.carros.push(carro); this.listar()})
    
    this.hidePostForm()
  }

  listar(): void
  {
    this.carroService.listar().subscribe(resp => this.carros = resp)
  }

  



}
