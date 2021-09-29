import { Component, OnInit } from '@angular/core';
import { ViewCorridaEquipe } from 'src/app/entities/view-corrida-equipe';
import { ViewCorridaEquipeService } from 'src/app/services/view-corrida-equipe.service';

@Component({
  selector: 'app-view-corrida-equipe',
  templateUrl: './view-corrida-equipe.component.html',
  styleUrls: ['./view-corrida-equipe.component.css']
})
export class ViewCorridaEquipeComponent implements OnInit {

  viewCorridaEquipes: ViewCorridaEquipe[] = []

  constructor(private viewCorridaEquipeService: ViewCorridaEquipeService) { }

  ngOnInit(): void {
    this.viewCorridaEquipeService.returnView().subscribe(resp => this.viewCorridaEquipes = resp)
  }

}
