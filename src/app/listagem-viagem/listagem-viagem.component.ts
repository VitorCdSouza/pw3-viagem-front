import { Component, OnInit } from '@angular/core';
import { ViagemService } from '../service/viagem.service';

@Component({
  selector: 'app-listagem-viagem',
  templateUrl: './listagem-viagem.component.html',
  styleUrls: ['./listagem-viagem.component.css']
})
export class ListagemViagemComponent implements OnInit {


  viagens: Array<any> = [];


  constructor(private service:ViagemService) { }

  ngOnInit() {
    this.service.listar().subscribe(i => this.viagens = i);
  }


}
