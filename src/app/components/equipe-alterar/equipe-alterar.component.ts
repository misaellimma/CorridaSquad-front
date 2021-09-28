import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipe } from 'src/app/entities/equipe';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-equipe-alterar',
  templateUrl: './equipe-alterar.component.html',
  styleUrls: ['./equipe-alterar.component.css']
})
export class EquipeAlterarComponent implements OnInit {

  equipe: Equipe = {
    id: 0,
    nome: ''
  }
  @Input() id?:Number

  constructor(private route: ActivatedRoute, private equipeService: EquipeService, private location: Location) { 
  }

  ngOnInit(): void {
    this.loadEquipe()
  }

  loadEquipe(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.equipe.id = id

    this.equipeService.loadEquipe(id)
      .subscribe(
        data => this.equipe = data
      )
  }

  alterar(): void
  {
    if(this.equipe){
      this.equipeService.alterar(this.equipe).subscribe(resp => console.log(resp))
      {this.goBack()}
    }
    
  }

  goBack():void {
    this.location.back()
  }

}
