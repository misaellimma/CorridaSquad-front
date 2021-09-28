import { Component, OnInit } from '@angular/core';
import { Auxiliar } from 'src/app/entities/auxiliar';
import { AuxiliarService } from 'src/app/services/auxiliar.service';

@Component({
  selector: 'app-auxiliar',
  templateUrl: './auxiliar.component.html',
  styleUrls: ['./auxiliar.component.css']
})
export class AuxiliarComponent implements OnInit {

  boolPostForm: boolean = false
  auxiliar: Auxiliar | undefined
  auxiliars: Auxiliar[] = []

  constructor(private auxiliarService: AuxiliarService) { }

  ngOnInit(): void {
    this.listar()
  }

  showPostForm(){
    this.boolPostForm = true
  }

  hidePostForm(){
    this.boolPostForm = false
  }

  save(nome: string, idMecanico: string, idEquipe: string){
    this.auxiliar = {
      id: 0,
      nome: nome,
      id_mecanico: Number(idMecanico),
      id_equipe: Number(idEquipe)
    }
    this.auxiliarService.incluir(this.auxiliar).subscribe(auxiliar => {this.auxiliars.push(auxiliar); this.listar()})
    
    this.hidePostForm()
  }

  listar(): void
  {
    this.auxiliarService.listar().subscribe(resp => this.auxiliars = resp)
  }

}
