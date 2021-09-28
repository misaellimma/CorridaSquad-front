import { Component, OnInit } from '@angular/core';
import { mecanico } from 'src/app/entities/mecanico';
import { MecanicoService } from 'src/app/services/mecanico.service';

@Component({
  selector: 'app-mecanico',
  templateUrl: './mecanico.component.html',
  styleUrls: ['./mecanico.component.css']
})
export class MecanicoComponent implements OnInit {

  boolPostForm: boolean = false

  mecanico: mecanico = {
    id: 0,
    nome: '',
    id_equipe:0
  }

  mecanicos: mecanico[] = []

  constructor(private mecanicoService: MecanicoService) { }

  ngOnInit(): void {
    this.listar()
  }

  showPostForm(): void{
    this.boolPostForm = true
  }

  hidePostForm(): void{
    this.boolPostForm = false
  }

  save(nome: string, id_equipe: string): void {
    this.mecanico = {
      id: 0,
      nome: nome,
      id_equipe: Number(id_equipe)
    }
    this.mecanicoService.incluir(this.mecanico).subscribe(mecanico => {this.mecanicos.push(mecanico); this.listar()})

    this.hidePostForm()
  }

  listar(): void
  {
    this.mecanicoService.listar().subscribe(resp => this.mecanicos = resp)
  }

}
