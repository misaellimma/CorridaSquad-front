import { Component, OnInit } from '@angular/core';
import { equipe } from 'src/app/entities/equipe';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  boolPostForm: boolean = false
  equipe: equipe | undefined
  equipes: equipe[] = []

  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.listar()
  }

  showPostForm(){
    this.boolPostForm = true
  }

  hidePostForm(){
    this.boolPostForm = false
  }

  save(nome: string){
    this.equipe = {
      id: 0,
      nome: nome
    }
    this.equipeService.incluir(this.equipe).subscribe(equipe => {this.equipes.push(equipe); this.listar()})
    
    this.hidePostForm()
  }

  listar(): void
  {
    this.equipeService.listar().subscribe(resp => this.equipes = resp)
  }

}
