import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from 'src/app/entities/carro';
import { Equipe } from 'src/app/entities/equipe';
import { CarroService } from 'src/app/services/carro.service';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  boolPostForm: boolean = false
  carro: Carro | undefined
  carros: Carro[] = []

  equipes: Equipe[] = [] 

  constructor(private carroService: CarroService, private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.listar()

    this.getEquipe()
  }

  getEquipe(): void {
    this.equipeService.listar().subscribe(
      data => {this.equipes = data}
    )
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
