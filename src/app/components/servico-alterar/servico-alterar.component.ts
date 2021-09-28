import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servico } from 'src/app/entities/servico';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-servico-alterar',
  templateUrl: './servico-alterar.component.html',
  styleUrls: ['./servico-alterar.component.css']
})
export class ServicoAlterarComponent implements OnInit {

  servico: Servico = {
    id: 0,
    descricao: '',
    id_mecanico: 0,
    id_carro: 0
  }

  constructor(private route: ActivatedRoute, private servicoService: ServicoService, private location: Location) { }

  ngOnInit(): void {
    this.loadServico()
  }

  loadServico(): void{
    this.servico.id = Number(this.route.snapshot.paramMap.get('id'))
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
