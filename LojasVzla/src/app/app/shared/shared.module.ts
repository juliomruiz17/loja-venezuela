import { AboutModule } from './../about/about.module';
import { AboutComponent } from './../about/about.component';
import { Routes } from '@angular/router';
import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import {RatingComponent} from './rating/rating.component'

import {PedidosService} from '../pedidos/pedidos.service'
import { ShoppingCartService } from './../loja-detail/shopping-cart/shopping-cart.service';
import { LojasService } from './../lojas/lojas.service';
import { MessagesComponent } from './messages/messages.component';

import {NotificationService} from './messages/notification.service'

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, MessagesComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent,MessagesComponent,
            RatingComponent, CommonModule,
            FormsModule, ReactiveFormsModule ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<AboutModule> {
    return {
      ngModule: SharedModule,
      providers:[ShoppingCartService, LojasService, PedidosService, NotificationService]
    }
  }
}
