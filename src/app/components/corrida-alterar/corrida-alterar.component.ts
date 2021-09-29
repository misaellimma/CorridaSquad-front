import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Corrida } from 'src/app/entities/corrida';
import { CorridaService } from 'src/app/services/corrida.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-corrida-alterar',
  templateUrl: './corrida-alterar.component.html',
  styleUrls: ['./corrida-alterar.component.css']
})
export class CorridaAlterarComponent implements OnInit {

  corrida: Corrida = {
    id: 0,
    descricao: ''
  }

  @Input() id?:Number

  constructor(private route: ActivatedRoute, private corridaService: CorridaService, private location: Location) { }

  ngOnInit(): void {
    this.loadCorrida()
  }

  loadCorrida(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.corridaService.loadCorrida(id).subscribe(resp => this.corrida = resp)
  }

  alterar(): void
  {
    if(this.corrida){
      this.corridaService.create(this.corrida).subscribe(resp => {this.goBack()})
    }
    
  }

  goBack():void {
    this.location.back()
  }
}
