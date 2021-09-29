import { Component, OnInit } from '@angular/core';
import { ViewMecanicoAuxiliar } from 'src/app/entities/viewMecanicoAuxiliar';
import { ViewMecanicoAuxiliarService } from 'src/app/services/view-mecanico-auxiliar.service';

@Component({
  selector: 'app-view-mecanico-auxiliar',
  templateUrl: './view-mecanico-auxiliar.component.html',
  styleUrls: ['./view-mecanico-auxiliar.component.css']
})
export class ViewMecanicoAuxiliarComponent implements OnInit {
  mecanicosAuxiliares:ViewMecanicoAuxiliar[] =[]
  constructor(private viewMecanicoAuxService : ViewMecanicoAuxiliarService) { }

  ngOnInit(): void {
    this.viewMecanicoAuxService.listar().subscribe(
      data => this.mecanicosAuxiliares = data
    )
  }

}
