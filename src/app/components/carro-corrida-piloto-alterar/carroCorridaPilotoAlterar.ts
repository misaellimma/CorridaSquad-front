import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { carroCorridaPiloto } from 'src/app/entities/carroCorridaPiloto';
import { CarroCorridaCarroCorridaPilotoService } from 'src/app/services/carro-corrida-piloto.service';

@Component({
  selector: 'app-carroCorridaPiloto-corrida-piloto-alterar',
  templateUrl: './carro-corrida-piloto-alterar.component.html',
  styleUrls: ['./carro-corrida-piloto-alterar.component.css']
})
export class CarroCorridaPilotoAlterarComponent implements OnInit {

  carroCorridaPiloto: carroCorridaPiloto = {
    id: 0,
    id_carro: 0,
    id_corrida: 0,
    id_piloto: 0

  }
  @Input() id?:Number

  constructor(private route: ActivatedRoute, private carroCorridaPilotoService: CarroCorridaCarroCorridaPilotoService, private location: Location) { 
  }

  ngOnInit(): void {
    this.loadCarroCorridaPiloto()
  }

  loadCarroCorridaPiloto(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.carroCorridaPiloto.id = id
  }

  alterar(): void
  {
    if(this.carroCorridaPiloto){
      this.carroCorridaPilotoService.alterar(this.carroCorridaPiloto).subscribe(resp => {this.goBack()})
    }
    
  }

  goBack():void {
    this.location.back()
  }

}
