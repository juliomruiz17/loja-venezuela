import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Pedidos, PedidoItem } from './pedidos.model';
import { CartItem } from './../loja-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../loja-detail/shopping-cart/shopping-cart.service';

import 'rxjs/add/operator/map'



import {MEAT_API} from '../app.api'



@Injectable()
 
export class PedidosService {

  constructor(private cartService: ShoppingCartService, private http: HttpClient){}

  itemsValue(): number {
    return this.cartService.total()
  }

  cartItems(): CartItem[]{
    return this.cartService.items
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.cartService.removeItem(item)
  }

  clear(){
    this.cartService.clear()
  }


 checkOrder(Pedidos: Pedidos): Observable<string> {
return this.http.post<Pedidos>('${MEAT_API}/pedidos', Pedidos)
    .map(Pedidos => Pedidos.id)
    
}
}