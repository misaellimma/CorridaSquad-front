import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/entities/carro';
import { Mecanico } from 'src/app/entities/mecanico';
import { Servico } from 'src/app/entities/servico';
import { ServicoService } from 'src/app/services/servico.service';
import { MecanicoService } from 'src/app/services/mecanico.service';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  boolPostForm: boolean = false
  carros: Carro[] = []
  mecanicos: Mecanico[] = []

  servico: Servico = {
    id: 0,
    id_carro: 0,
    id_mecanico: 0,
    descricao: ''
  }

  servicos: Servico[] = []

  constructor(private servicoService: ServicoService,private mecanicoService: MecanicoService,private carroService: CarroService ) { }

  ngOnInit(): void {
    this.listar()
    this.carroService.listar().subscribe(resp => this.carros = resp)
    this.mecanicoService.listar().subscribe(resp => this.mecanicos = resp)
  }

  showPostForm(): void{
    this.boolPostForm = true
  }

  hidePostForm(): void{
    this.boolPostForm = false
  }

  save(descricao: string, id_mecanico: number, id_carro: number): void {
    
    this.servico = {
      id: 0,
      id_carro: id_carro,
      id_mecanico: id_mecanico,
      descricao: descricao
    }
    this.servicoService.incluir(this.servico).subscribe(servico => {this.servicos.push(servico); this.listar()})

    this.hidePostForm()
  }

  listar(): void
  {
    this.servicoService.listar().subscribe(resp => this.servicos = resp)
  }

}