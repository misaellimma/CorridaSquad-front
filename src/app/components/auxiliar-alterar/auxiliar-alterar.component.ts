import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auxiliar } from 'src/app/entities/auxiliar';
import { Equipe } from 'src/app/entities/equipe';
import { Mecanico } from 'src/app/entities/mecanico';
import { AuxiliarService } from 'src/app/services/auxiliar.service';
import { EquipeService } from 'src/app/services/equipe.service';
import { MecanicoService } from 'src/app/services/mecanico.service';

@Component({
  selector: 'app-auxiliar-alterar',
  templateUrl: './auxiliar-alterar.component.html',
  styleUrls: ['./auxiliar-alterar.component.css']
})
export class AuxiliarAlterarComponent implements OnInit {

  auxiliar: Auxiliar = {
    id: 0,
    nome: '',
    id_mecanico: 0,
    id_equipe: 0

  }
  equipes: Equipe[] =[];
  mecanicos: Mecanico[] =[]
  
  @Input() id?:Number

  constructor(private route: ActivatedRoute, private auxiliarService: AuxiliarService, private location: Location, private mecanicoService : MecanicoService, private equipeService : EquipeService) { 
  }

  ngOnInit(): void {
    this.loadCarro()
  }

  loadCarro(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.auxiliarService.loadAuxiliar(id).subscribe(
      resp=> this.auxiliar = resp
    )
    this.mecanicoService.listar().subscribe(
      resp => this.mecanicos = resp
    )
    this.equipeService.listar().subscribe(
      resp => this.equipes = resp
    )
  }

  alterar(): void
  {
    if(this.auxiliar){
      this.auxiliarService.alterar(this.auxiliar).subscribe(resp => {this.goBack()})
    }
    
  }

  goBack():void {
    this.location.back()
  }

}
