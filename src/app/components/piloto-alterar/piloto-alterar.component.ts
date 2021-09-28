import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { piloto } from 'src/app/entities/piloto';
import { PilotoService } from 'src/app/services/piloto.service';

@Component({
  selector: 'app-piloto-alterar',
  templateUrl: './piloto-alterar.component.html',
  styleUrls: ['./piloto-alterar.component.css']
})
export class PilotoAlterarComponent implements OnInit {

  piloto: piloto = {
    id: 0,
    nome: '',
    id_equipe: 0
  }

  constructor(private route: ActivatedRoute, private pilotoService: PilotoService, private location: Location) { }

  ngOnInit(): void {
    this.loadPiloto()
  }

  loadPiloto(): void{ 
    this.piloto.id = Number(this.route.snapshot.paramMap.get('id'))
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
