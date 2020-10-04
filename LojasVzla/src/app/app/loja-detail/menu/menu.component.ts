import { MenuItem } from './../menu-item/menu-item.model';
import { LojasService } from './../../lojas/lojas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private lojasService: LojasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.lojasService
      .menuOfLojas(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem){
    console.log(item)
  }







}

