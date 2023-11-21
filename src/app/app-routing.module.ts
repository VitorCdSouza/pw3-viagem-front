import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';

const routes: Routes = [
  {path:'listagem', component:ListagemViagemComponent},
  {path:'cadastro', component:CadastroViagemComponent},
  {path:'detalhes/:id', component:DetalhesViagemComponent},
  {path:'exclusao/:id', component:ExclusaoViagemComponent},
  {path:'', redirectTo: '/listagem', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
