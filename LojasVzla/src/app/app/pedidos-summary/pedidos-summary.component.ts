import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-summary',
  templateUrl: './pedidos-summary.component.html',
  
})
export class PedidosSummaryComponent implements OnInit {

  rated: boolean
  constructor() { }

  ngOnInit() {
  }

  rate() {
    this.rated = true
  }

}
