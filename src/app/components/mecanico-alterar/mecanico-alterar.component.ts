import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipe } from 'src/app/entities/equipe';
import { Mecanico } from 'src/app/entities/mecanico';
import { EquipeService } from 'src/app/services/equipe.service';
import { MecanicoService } from 'src/app/services/mecanico.service';

@Component({
  selector: 'app-mecanico-alterar',
  templateUrl: './mecanico-alterar.component.html',
  styleUrls: ['./mecanico-alterar.component.css']
})
export class MecanicoAlterarComponent implements OnInit {

  mecanico: Mecanico = {
    id: 0,
    nome: '',
    id_equipe: 0
  }
  @Input() id?:Number

  equipes: Equipe[] = []
  equipe!: Equipe

  constructor(private route: ActivatedRoute, private mecanicoService: MecanicoService, private location: Location, private equipeService: EquipeService) { 
  }

  ngOnInit(): void {
    this.loadMecanico()
    this.equipeService.listar().subscribe(resp => this.equipes = resp)
  }

  loadMecanico(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.mecanicoService.loadMecanico(id).subscribe(resp => this.mecanico = resp)
  }

  alterar(): void
  {
    if(this.mecanico){
      this.mecanicoService.alterar(this.mecanico).subscribe(resp => {this.goBack()})
    }
    
  }

  goBack():void {
    this.location.back()
  }

}
