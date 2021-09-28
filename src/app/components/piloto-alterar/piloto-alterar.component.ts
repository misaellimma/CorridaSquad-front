import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipe } from 'src/app/entities/equipe';
import { Piloto } from 'src/app/entities/piloto';
import { EquipeService } from 'src/app/services/equipe.service';
import { PilotoService } from 'src/app/services/piloto.service';

@Component({
  selector: 'app-piloto-alterar',
  templateUrl: './piloto-alterar.component.html',
  styleUrls: ['./piloto-alterar.component.css']
})
export class PilotoAlterarComponent implements OnInit {

  piloto: Piloto = {
    id: 0,
    nome: '',
    id_equipe: 0
  }

  equipes: Equipe[] = []

  constructor(private route: ActivatedRoute, private pilotoService: PilotoService, private location: Location, private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.loadPiloto()

    this.equipeService.listar()
      .subscribe(
        data => this.equipes = data
      )
  }

  loadPiloto(): void{ 
    var id = Number(this.route.snapshot.paramMap.get('id'))

    this.pilotoService.loadPiloto(id)
      .subscribe(
        data => this.piloto = data
      )
  }

  alterar(): void {
    if(this.piloto) {
      this.pilotoService.alterar(this.piloto).subscribe(resp => this.goBack())
    }
  }

  goBack():void {
    this.location.back()
  }

}
