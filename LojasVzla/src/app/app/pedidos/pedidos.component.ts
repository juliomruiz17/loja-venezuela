import { Loja } from './../lojas/loja/loja.model';

import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'

import {Router} from '@angular/router'
import {RadioOption} from '../shared/radio/radio-option.model'
import {PedidosService} from './pedidos.service'
import {CartItem} from '../loja-detail/shopping-cart/cart-item.model'
import { Pedidos, PedidoItem } from './pedidos.model'



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',

})
export class PedidosComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  numberPattern = /^[0-9]*$/

  orderForm: FormGroup

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ]

  constructor(private pedidosService: PedidosService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validator: PedidosComponent.equalsTo})
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean} {
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if(!email || !emailConfirmation){
      return undefined
    }
    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }
    return undefined
  }

  itemsValue(): number {
    return this.pedidosService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.pedidosService.cartItems()
  }

  increaseQty(item: CartItem){
    this.pedidosService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.pedidosService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.pedidosService.remove(item)
  }

 checkOrder(Pedidos: Pedidos){
    Pedidos.PedidoItems = this.cartItems()
      .map((item:CartItem)=>new PedidoItem(item.quantity, item.menuItem.id))
    this.pedidosService.checkOrder(Pedidos)
      .subscribe( () => {
        this.router.navigate(['/pedidos-summary'])
        this.pedidosService.clear()
  })
    console.log(Pedidos)
 }

}

