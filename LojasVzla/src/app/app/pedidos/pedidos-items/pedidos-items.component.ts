import { CartItem } from './../../loja-detail/shopping-cart/cart-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-pedidos-items',
  templateUrl: './pedidos-items.component.html',


})
export class PedidosItemsComponent implements OnInit {
  @Input() items: CartItem[]

  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem){
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item)
  }

  emitRemove(item: CartItem){
    this.remove.emit(item)
  }

}
