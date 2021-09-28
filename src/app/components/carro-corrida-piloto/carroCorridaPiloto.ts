import { Component, OnInit } from '@angular/core';
import { carroCorridaPiloto } from 'src/app/entities/carroCorridaPiloto';
import { CarroCorridaCarroCorridaPilotoService } from 'src/app/services/carro-corrida-piloto.service';

@Component({
  selector: 'app-carroCorridaPiloto-corrida-piloto',
  templateUrl: './carro-corrida-piloto.component.html',
  styleUrls: ['./carro-corrida-piloto.component.css']
})
export class CarroCorridaPilotoComponent implements OnInit {

  boolPostForm: boolean = false
  carroCorridaPiloto: carroCorridaPiloto | undefined
  carroCorridaPilotos: carroCorridaPiloto[] = []

  constructor(private carroCorridaPilotoService: CarroCorridaCarroCorridaPilotoService) { }

  ngOnInit(): void {
    this.listar()
  }

  showPostForm(){
    this.boolPostForm = true
  }

  hidePostForm(){
    this.boolPostForm = false
  }

  save(idCarro: string, idCorrida: string, idPiloto: string){
    this.carroCorridaPiloto = {
      id: 0,
      id_carro: Number(idCarro),
      id_corrida: Number(idCorrida),
      id_piloto: Number(idPiloto)
    }
    this.carroCorridaPilotoService.incluir(this.carroCorridaPiloto).subscribe(carroCorridaPiloto => {this.carroCorridaPilotos.push(carroCorridaPiloto); this.listar()})
    
    this.hidePostForm()
  }

  listar(): void
  {
    this.carroCorridaPilotoService.listar().subscribe(resp => this.carroCorridaPilotos = resp)
  }

}
