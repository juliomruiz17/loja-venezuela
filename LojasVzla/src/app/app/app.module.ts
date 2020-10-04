
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';

import { AppRoutingModule, ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { RouterModule, PreloadAllModules, Routes, } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {LocationStrategy, HashLocationStrategy} from '@angular/common'

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { LojasComponent } from './lojas/lojas.component';
import { LojaDetailComponent } from './loja-detail/loja-detail.component';
import { LojasService } from './lojas/lojas.service';

import { MenuComponent } from './loja-detail/menu/menu.component';
import { MenuItemComponent } from './loja-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './loja-detail/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './loja-detail/reviews/reviews.component';

import { PedidosSummaryComponent } from './pedidos-summary/pedidos-summary.component';

import { NotFoundComponent } from './not-found/not-found.component';

import { SharedModule } from './shared/shared.module';
import { LojaComponent } from './lojas/loja/loja.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LojasComponent,
    NotFoundComponent,
    HeaderComponent,
    LojaDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ReviewsComponent,
    ShoppingCartComponent,
    PedidosSummaryComponent,
    LojaComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES,{preloadingStrategy: PreloadAllModules})
  ],
  providers: [LojasService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
