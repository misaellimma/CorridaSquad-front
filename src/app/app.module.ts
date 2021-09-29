import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarroComponent } from './components/carro/carro.component';
import { CarroAlterarComponent } from './components/carro-alterar/carro-alterar.component';
import { PilotoComponent } from './components/piloto/piloto.component';
import { PilotoAlterarComponent } from './components/piloto-alterar/piloto-alterar.component';
import { ServicoComponent } from './components/servico/servico.component';
import { MecanicoComponent } from './components/mecanico/mecanico.component';
import { ServicoAlterarComponent } from './components/servico-alterar/servico-alterar.component';
// import { CorridaComponent } from './components/corrida/corrida/corrida.component';
import { MecanicoAlterarComponent } from './components/mecanico-alterar/mecanico-alterar.component';
import { AuxiliarComponent } from './components/auxiliar/auxiliar.component';
import { AuxiliarAlterarComponent } from './components/auxiliar-alterar/auxiliar-alterar.component';
// import { CorridaAlterarComponent } from './components/corrida-alterar/corrida-alterar.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { EquipeAlterarComponent } from './components/equipe-alterar/equipe-alterar.component';
import { CarroCorridaPilotoComponent } from './components/carro-corrida-piloto/carroCorridaPiloto';
import { CarroCorridaPilotoAlterarComponent } from './components/carro-corrida-piloto-alterar/carroCorridaPilotoAlterar';
import { AuxiliarService } from './services/auxiliar.service';
import { CarroService } from './services/carro.service';
import { CarroCorridaCarroCorridaPilotoService } from './services/carro-corrida-piloto.service';
import { EquipeService } from './services/equipe.service';
import { PilotoService } from './services/piloto.service';
import { MecanicoService } from './services/mecanico.service';
import { ServicoService } from './services/servico.service';
import { CorridaComponent } from './components/corrida/corrida.component';
import { CorridaService } from './services/corrida.service';
import { CorridaAlterarComponent } from './components/corrida-alterar/corrida-alterar.component';
import { ViewMecanicoAuxComponent } from './components/view-mecanico-aux/view-mecanico-aux.component';
import { ViewCorridaEquipeComponent } from './components/view-corrida-equipe/view-corrida-equipe.component';
<<<<<<< HEAD
import { ViewMecanicoAuxiliarComponent } from './components/view-mecanico-auxiliar/view-mecanico-auxiliar.component';
=======
import { ViewQuantidadeCarroCorridaComponent } from './components/view-quantidade-carro-corrida/view-quantidade-carro-corrida.component';
>>>>>>> e91f53dad672193c3e73dd9b81720d54027f5b2c

@NgModule({
  declarations: [
    AppComponent,
    CarroComponent,
    CarroAlterarComponent,
    CorridaComponent,
    CorridaAlterarComponent,
    PilotoComponent,
    PilotoAlterarComponent,
    ServicoComponent,
    MecanicoComponent,
    ServicoAlterarComponent,
    MecanicoAlterarComponent,
    AuxiliarComponent,
    AuxiliarAlterarComponent,
    EquipeComponent,
    EquipeAlterarComponent,
    CarroCorridaPilotoComponent,
    CarroCorridaPilotoAlterarComponent,
    ViewCorridaEquipeComponent,
    ViewMecanicoAuxComponent,
<<<<<<< HEAD
    ViewMecanicoAuxiliarComponent
=======
    ViewQuantidadeCarroCorridaComponent
>>>>>>> e91f53dad672193c3e73dd9b81720d54027f5b2c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuxiliarService,
    CarroService,
    CarroCorridaCarroCorridaPilotoService,
    
    EquipeService,
    PilotoService,
    MecanicoService,
    ServicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
