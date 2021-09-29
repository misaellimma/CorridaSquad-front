import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from 'src/app/entities/carro';
import { Mecanico } from 'src/app/entities/mecanico';
import { Servico } from 'src/app/entities/servico';
import { CarroService } from 'src/app/services/carro.service';
import { MecanicoService } from 'src/app/services/mecanico.service';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-servico-alterar',
  templateUrl: './servico-alterar.component.html',
  styleUrls: ['./servico-alterar.component.css']
})
export class ServicoAlterarComponent implements OnInit {

  carros!: Carro[]

  carro!: Carro

  servico: Servico = {
    id: 0,
    descricao: '',
    id_mecanico: 0,
    id_carro: 0
  }

  constructor(
    private route: ActivatedRoute, 
    private servicoService: ServicoService, 
    private location: Location,
    private carroService: CarroService
    ) { }

  ngOnInit(): void {
    this.loadServico()
    this.carroService.listar().subscribe(resp => this.carros = resp)
  }

  loadServico(): void{
    this.servico.id = Number(this.route.snapshot.paramMap.get('id'))
    this.servicoService.loadservico(this.servico.id).subscribe(resp => this.servico = resp)
  }

  alterar(): void {
    if(this.servico) {
      this.servicoService.alterar(this.servico).subscribe(resp => this.goBack())
    }
  }

  goBack():void {
    this.location.back()
  }

}
