import { Component, OnInit } from '@angular/core';
import { ViewMecanicoAuxiliar } from 'src/app/entities/viewMecanicoAuxiliar';
import { ViewMecanicoAuxService } from 'src/app/services/view-mecanico-aux.service';

@Component({
  selector: 'app-view-mecanico-aux',
  templateUrl: './view-mecanico-aux.component.html',
  styleUrls: ['./view-mecanico-aux.component.css']
})
export class ViewMecanicoAuxiliarComponent implements OnInit {
  mecanicosAuxiliares:ViewMecanicoAuxiliar[] =[]
  constructor(private viewMecanicoAuxService : ViewMecanicoAuxService) { }

  ngOnInit(): void {
    this.viewMecanicoAuxService.listar().subscribe(
      data => this.mecanicosAuxiliares = data
    )
  }

}
