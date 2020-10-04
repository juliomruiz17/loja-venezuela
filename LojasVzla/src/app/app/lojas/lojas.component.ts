import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {trigger, state, style, transition, animate} from '@angular/animations'

import { LojasService } from './lojas.service';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from'
import { Loja } from './loja/loja.model';


@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})

export class LojasComponent implements OnInit {

  searchBarState = 'hidden'
  lojas: Loja[]

  searchForm: FormGroup
  searchControl: FormControl


  constructor(private lojasService: LojasService,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

   this.searchControl.valueChanges
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap(searchTerm =>
          this.lojasService
            .lojas(searchTerm)
            .catch(error=>Observable.from([])))
        .subscribe(lojas => this.lojas = lojas)

    this.lojasService.lojas()
      .subscribe(lojas => this.lojas = lojas)
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
