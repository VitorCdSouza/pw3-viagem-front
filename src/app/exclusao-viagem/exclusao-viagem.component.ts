import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exclusao-viagem',
  templateUrl: './exclusao-viagem.component.html',
  styleUrls: ['./exclusao-viagem.component.css']
})
export class ExclusaoViagemComponent implements OnInit {

  viagem : any;
  viagens: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.viagens = [
      { "id": 1, "destino": "Acapulco", "tipo": "LAZER", "chegada": "2021-06-08", "saida": "2021-06-18", "orcamento": 4000, "pessoas": 4 },
      { "id": 2, "destino": "Egito (Cairo)", "tipo": "LAZER", "chegada": "2021-06-20", "saida": "2021-06-28", "orcamento": 2900, "pessoas": 4 },
      { "id": 3, "destino": "Nova Zelândia", "tipo": "LAZER", "chegada": "2021-09-04", "saida": "2021-10-11", "orcamento": 4900, "pessoas": 4 }];
      
      this.viagem = this.viagens.filter(e => e.id == 1)[0];
}

}
