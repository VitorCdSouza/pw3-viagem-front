import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CadastroViagemComponent,
    DetalhesViagemComponent,
    ExclusaoViagemComponent,
    ListagemViagemComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
