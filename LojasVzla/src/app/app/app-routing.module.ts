import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {LojasComponent} from './lojas/lojas.component'
import {LojaDetailComponent} from './loja-detail/loja-detail.component'
import {MenuComponent} from './loja-detail/menu/menu.component'
import {ReviewsComponent} from './loja-detail/reviews/reviews.component'
import {PedidosSummaryComponent} from './pedidos-summary/pedidos-summary.component'
import {NotFoundComponent} from './not-found/not-found.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lojas', component: LojasComponent},
  {path: 'lojas/:id', component: LojaDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]},
  {path: 'pedidos', loadChildren: './pedidos/pedidos.module#PedidosModule'},
  {path: 'pedidos-summary', component: PedidosSummaryComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: '**', component: NotFoundComponent}
];


export class AppRoutingModule { }
