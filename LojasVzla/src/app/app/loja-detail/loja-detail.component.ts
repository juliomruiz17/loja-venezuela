import { Loja } from './../lojas/loja/loja.model';
import { LojasService } from './../lojas/lojas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loja-detail',
  templateUrl: './loja-detail.component.html',
})
export class LojaDetailComponent implements OnInit {

  Lojas: Loja

  constructor(private LojasService: LojasService,
              private route:   ActivatedRoute ) { }

  ngOnInit() {
    this.LojasService.lojasById(this.route.snapshot.params['id'])
      .subscribe(lojas => this.Lojas = lojas)
  }

}
