import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from 'src/app/entities/carro';
import { CarroCorridaPiloto } from 'src/app/entities/carroCorridaPiloto';
import { Corrida } from 'src/app/entities/corrida';
import { Piloto } from 'src/app/entities/piloto';
import { CarroCorridaCarroCorridaPilotoService } from 'src/app/services/carro-corrida-piloto.service';
import { CarroService } from 'src/app/services/carro.service';
import { CorridaService } from 'src/app/services/corrida.service';
import { PilotoService } from 'src/app/services/piloto.service';

@Component({
  selector: 'app-carroCorridaPiloto-corrida-piloto-alterar',
  templateUrl: './carro-corrida-piloto-alterar.component.html',
  styleUrls: ['./carro-corrida-piloto-alterar.component.css']
})
export class CarroCorridaPilotoAlterarComponent implements OnInit {

  carroCorridaPiloto: CarroCorridaPiloto = {
    id: 0,
    id_carro: 0,
    id_corrida: 0,
    id_piloto: 0

  }

  pilotos!: Piloto[]
  corridas!: Corrida[]
  carros!: Carro[]

  @Input() id?:Number

  constructor(
    private route: ActivatedRoute, 
    private carroCorridaPilotoService: CarroCorridaCarroCorridaPilotoService, 
    private location: Location, 
    private carroService: CarroService,
    private pilotoService: PilotoService,
    private corridaService: CorridaService
    ) { 
  }

  ngOnInit(): void {
    this.loadCarroCorridaPiloto()
    this.carroService.listar().subscribe(resp => this.carros = resp)
    this.pilotoService.listar().subscribe(resp => this.pilotos = resp)
    this.corridaService.getAll().subscribe(resp => this.corridas = resp)
  }

  loadCarroCorridaPiloto(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.carroCorridaPilotoService.loadCarroCorridaPiloto(id).subscribe(resp => this.carroCorridaPiloto = resp)
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
