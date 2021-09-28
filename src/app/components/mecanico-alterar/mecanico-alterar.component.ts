import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mecanico } from 'src/app/entities/mecanico';
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

  constructor(private route: ActivatedRoute, private mecanicoService: MecanicoService, private location: Location) { 
  }

  ngOnInit(): void {
    this.loadMecanico()
  }

  loadMecanico(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.mecanico.id = id
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
