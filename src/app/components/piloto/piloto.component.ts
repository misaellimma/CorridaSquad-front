import { Component, OnInit } from '@angular/core';
import { Piloto } from 'src/app/entities/piloto';
import { PilotoService } from 'src/app/services/piloto.service';
import { EquipeService } from 'src/app/services/equipe.service';
import { Equipe } from 'src/app/entities/equipe';

@Component({
  selector: 'app-piloto',
  templateUrl: './piloto.component.html',
  styleUrls: ['./piloto.component.css']
})
export class PilotoComponent implements OnInit {

  boolPostForm: boolean = false
  equipes: Equipe[] = []

  piloto: Piloto = {
    id: 0,
    nome: '',
    id_equipe:0
  }

  pilotos: Piloto[] = []

  constructor(private pilotoService: PilotoService,private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.listar()
    this.equipeService.listar().subscribe(resp => this.equipes = resp)
  }

  showPostForm(): void{
    this.boolPostForm = true
  }

  hidePostForm(): void{
    this.boolPostForm = false
  }

  save(nome: string, idEquipe: string): void {
    this.piloto = {
      id: 0,
      nome: nome,
      id_equipe: Number(idEquipe)
    }
    this.pilotoService.incluir(this.piloto).subscribe(piloto => {this.pilotos.push(piloto); this.listar()})
    
    this.hidePostForm()
  }

  listar(): void
  {
    this.pilotoService.listar().subscribe(resp => this.pilotos = resp)
  }

}
