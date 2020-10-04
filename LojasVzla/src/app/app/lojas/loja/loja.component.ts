import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'

import { Loja} from './loja.model'

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  animations: [
    trigger('lojaAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class LojaComponent implements OnInit {

  LojaState = 'ready'

  @Input() Loja: Loja

  constructor() { }

  ngOnInit(): void {
  }

}
