import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { carro } from 'src/app/entities/carro';
import { CarroService } from 'src/app/services/carro.service';
import { Location } from '@angular/common';
import { EquipeService } from 'src/app/services/equipe.service';
import { equipe } from 'src/app/entities/equipe';

@Component({
  selector: 'app-carro-alterar',
  templateUrl: './carro-alterar.component.html',
  styleUrls: ['./carro-alterar.component.css']
})
export class CarroAlterarComponent implements OnInit {

  carro: carro = {
    id: 0,
    descricao: '',
    numero: '',
    id_equipe: 0

  }
  @Input() id?:Number

  equipes: equipe[] = []

  constructor(private route: ActivatedRoute, private carroService: CarroService, private location: Location, private equipeService: EquipeService) { 
  }

  ngOnInit(): void {
    this.loadCarro()

    this.equipeService.listar().subscribe(
      data => {this.equipes = data}
    )
  }

  loadCarro(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.carro.id = id
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
