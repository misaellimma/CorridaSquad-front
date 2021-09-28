import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuxiliarAlterarComponent } from './components/auxiliar-alterar/auxiliar-alterar.component';
import { AuxiliarComponent } from './components/auxiliar/auxiliar.component';
import { CarroAlterarComponent } from './components/carro-alterar/carro-alterar.component';
import { CarroCorridaPilotoAlterarComponent } from './components/carro-corrida-piloto-alterar/carroCorridaPilotoAlterar';
import { CarroCorridaPilotoComponent } from './components/carro-corrida-piloto/carroCorridaPiloto';
import { CarroComponent } from './components/carro/carro.component';
import { EquipeAlterarComponent } from './components/equipe-alterar/equipe-alterar.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { MecanicoAlterarComponent } from './components/mecanico-alterar/mecanico-alterar.component';
import { MecanicoComponent } from './components/mecanico/mecanico.component';
import { PilotoAlterarComponent } from './components/piloto-alterar/piloto-alterar.component';
import { PilotoComponent } from './components/piloto/piloto.component';
import { ServicoAlterarComponent } from './components/servico-alterar/servico-alterar.component';
import { ServicoComponent } from './components/servico/servico.component';


const routes: Routes = [
  { path: "carro", component: CarroComponent},
  { path: "carro/alterar/:id", component: CarroAlterarComponent},
  { path: "piloto", component: PilotoComponent},
  { path: "piloto/alterar/:id", component: PilotoAlterarComponent},
  { path: "servico", component: ServicoComponent},
  { path: "servico/alterar/:id", component: ServicoAlterarComponent},
  { path: "auxiliar", component: AuxiliarComponent},
  { path: "auxiliar/alterar/:id", component: AuxiliarAlterarComponent},
  { path: "mecanico", component: MecanicoComponent},
  { path: "mecanico/alterar/:id", component: MecanicoAlterarComponent},
  { path: "carroCorridaPiloto", component: CarroCorridaPilotoComponent},
  { path: "carroCorridaPiloto/alterar/:id", component: CarroCorridaPilotoAlterarComponent},
  { path: "equipe", component: EquipeComponent},
  { path: "equipe/alterar/:id", component: EquipeAlterarComponent}
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
