import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Carro } from 'src/app/entities/carro';
import { CarroService } from 'src/app/services/carro.service';
import { Location } from '@angular/common';

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

  constructor(private route: ActivatedRoute, private carroService: CarroService, private location: Location) { 
  }

  ngOnInit(): void {
    this.loadCarro()
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
