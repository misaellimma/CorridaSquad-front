import { Component, OnInit } from '@angular/core';
import { ViewQuantidadeCarroCorrida } from 'src/app/entities/viewQuantidadeCarroCorrida';
import { ViewQuantidadeCarroCorridaService } from 'src/app/services/view-quantidade-carro-corrida.service';
import { view_quantidade_carro_corrida } from 'src/app/services/view_quantidade_carro_corrida';

@Component({
  selector: 'app-view-quantidade-carro-corrida',
  templateUrl: './view-quantidade-carro-corrida.component.html',
  styleUrls: ['./view-quantidade-carro-corrida.component.css']
})
export class ViewQuantidadeCarroCorridaComponent implements OnInit {

  viewQuantidadeCarroCorridas: ViewQuantidadeCarroCorrida[] = [];
  
  constructor(private viewQuantidadeCarroCorridaService: ViewQuantidadeCarroCorridaService) { }

  ngOnInit(): void {
    this.listar();
  }
  
  listar():void{
    this.viewQuantidadeCarroCorridaService.getView()
      .subscribe(resp => this.viewQuantidadeCarroCorridas = resp)
  }
}
