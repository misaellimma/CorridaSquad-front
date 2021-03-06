import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Carro } from 'src/app/entities/carro';
import { CarroService } from 'src/app/services/carro.service';
import { Location } from '@angular/common';
import { EquipeService } from 'src/app/services/equipe.service';
import { Equipe } from 'src/app/entities/equipe';

@Component({
  selector: 'app-carro-alterar',
  templateUrl: './carro-alterar.component.html',
  styleUrls: ['./carro-alterar.component.css']
})
export class CarroAlterarComponent implements OnInit {

  carro: Carro = {
    id: 0,
    descricao: '',
    numero: '',
    id_equipe: 0
  }
  @Input() id?:Number

  equipes: Equipe[] = []

  constructor(private route: ActivatedRoute, private carroService: CarroService, private location: Location, private equipeService: EquipeService) { 
  }

  ngOnInit(): void {
    this.loadCarro()

    this.equipeService.listar().subscribe(
      data => this.equipes = data
      )
      console.log(this.equipes)
  }

  loadCarro(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.carroService.loadCarro(id).subscribe(
      resp => this.carro = resp
    )
  }

  alterar(): void
  {
    if(this.carro){
      this.carroService.alterar(this.carro).subscribe(resp => {this.goBack()})
    }
    
  }

  goBack():void {
    this.location.back()
  }

}
