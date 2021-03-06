import { Component, OnInit } from '@angular/core';
import { Auxiliar } from 'src/app/entities/auxiliar';
import { Equipe } from 'src/app/entities/equipe';
import { Mecanico } from 'src/app/entities/mecanico';
import { AuxiliarService } from 'src/app/services/auxiliar.service';
import { EquipeService } from 'src/app/services/equipe.service';
import { MecanicoService } from 'src/app/services/mecanico.service';

@Component({
  selector: 'app-auxiliar',
  templateUrl: './auxiliar.component.html',
  styleUrls: ['./auxiliar.component.css']
})
export class AuxiliarComponent implements OnInit {

  boolPostForm: boolean = false
  auxiliar: Auxiliar | undefined
  auxiliars: Auxiliar[] = []
  equipes: Equipe[] =[];
  mecanicos: Mecanico[] =[]

  constructor(private auxiliarService: AuxiliarService, private equipeService : EquipeService, private mecanicoService : MecanicoService) { }

  ngOnInit(): void {
    this.listar()
  }

  showPostForm(){
    this.boolPostForm = true
  }

  hidePostForm(){
    this.boolPostForm = false
  }

  save(nome: string, idMecanico: string){
    this.auxiliar = {
      id: 0,
      nome: nome,
      id_mecanico: Number(idMecanico)
    }
    this.auxiliarService.incluir(this.auxiliar).subscribe(auxiliar => {this.auxiliars.push(auxiliar); this.listar()})
    
    this.hidePostForm()
  }

  listar(): void
  {
    this.auxiliarService.listar().subscribe(resp => this.auxiliars = resp)
    this.equipeService.listar().subscribe(resp=> this.equipes = resp)
    this.mecanicoService.listar().subscribe(resp=>this.mecanicos = resp)
  }

}
