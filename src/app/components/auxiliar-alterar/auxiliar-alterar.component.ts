import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auxiliar } from 'src/app/entities/auxiliar';
import { AuxiliarService } from 'src/app/services/auxiliar.service';

@Component({
  selector: 'app-auxiliar-alterar',
  templateUrl: './auxiliar-alterar.component.html',
  styleUrls: ['./auxiliar-alterar.component.css']
})
export class AuxiliarAlterarComponent implements OnInit {

  auxiliar: Auxiliar = {
    id: 0,
    nome: '',
    id_mecanico: 0,
    id_equipe: 0

  }
  
  @Input() id?:Number

  constructor(private route: ActivatedRoute, private auxiliarService: AuxiliarService, private location: Location) { 
  }

  ngOnInit(): void {
    this.loadCarro()
  }

  loadCarro(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.auxiliar.id = id
  }

  alterar(): void
  {
    if(this.auxiliar){
      this.auxiliarService.alterar(this.auxiliar).subscribe(resp => {this.goBack()})
    }
    
  }

  goBack():void {
    this.location.back()
  }

}
