import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/entities/carro';
import { CarroCorridaPiloto } from 'src/app/entities/carroCorridaPiloto';
import { Corrida } from 'src/app/entities/corrida';
import { Piloto } from 'src/app/entities/piloto';
import { CarroCorridaCarroCorridaPilotoService } from 'src/app/services/carro-corrida-piloto.service';
import { CarroService } from 'src/app/services/carro.service';
import { CorridaService } from 'src/app/services/corrida.service';
import { PilotoService } from 'src/app/services/piloto.service';

@Component({
  selector: 'app-carroCorridaPiloto-corrida-piloto',
  templateUrl: './carro-corrida-piloto.component.html',
  styleUrls: ['./carro-corrida-piloto.component.css']
})
export class CarroCorridaPilotoComponent implements OnInit {

  boolPostForm: boolean = false
  carroCorridaPiloto: CarroCorridaPiloto = {
    id: 0,
    id_carro: 0,
    id_corrida: 0,
    id_piloto: 0
  }
  carroCorridaPilotos: CarroCorridaPiloto[] = []
  carros: Carro[] = []
  pilotos: Piloto[] = []
  corridas: Corrida[] = []

  carro: Carro = {
    id: 0,
    descricao: '',
    numero: '',
    id_equipe: 0
  }

  piloto: Piloto = {
    id: 0,
    nome: '',
    id_equipe: 0
  }

  corrida: Corrida = {
    id: 0,
    descricao: ''
  }

  constructor(private carroCorridaPilotoService: CarroCorridaCarroCorridaPilotoService, private pilotoService: PilotoService, private carroService: CarroService, private corridaService: CorridaService) { }

  ngOnInit(): void {
    this.listar()
    this.carroService.listar().subscribe(resp => this.carros = resp)
    this.corridaService.getAll().subscribe(resp => this.corridas = resp)
    this.pilotoService.listar().subscribe(resp => this.pilotos = resp)
  }

  showPostForm(){
    this.boolPostForm = true
  }

  hidePostForm(){
    this.boolPostForm = false
  }

  save(){
    
    if(this.carro && this.corrida && this.piloto) {

      this.carroCorridaPiloto = {
        id: 0,
        id_carro: this.carro.id,
        id_corrida: this.corrida.id,
        id_piloto: this.piloto.id
      }

      this.carroCorridaPilotoService.incluir(this.carroCorridaPiloto).subscribe(resp => {this.carroCorridaPilotos.push(resp); this.listar()})
      this.hidePostForm()

    } else {

      alert("Insira todos os dados!")
    
    }

  }

  listar(): void
  {
    this.carroCorridaPilotoService.listar().subscribe(resp => this.carroCorridaPilotos = resp)
  }

}
