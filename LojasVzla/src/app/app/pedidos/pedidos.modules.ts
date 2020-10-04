import {NgModule} from "@angular/core"
import {RouterModule, Routes} from '@angular/router'

import {SharedModule} from '../shared/shared.module'

import {PedidosComponent} from './pedidos.component'
import {PedidosItemsComponent} from './pedidos-items/pedidos-items.component'
import {DeliveryComponent} from './delivery/delivery.component'

const ROUTES: Routes = [
  {path:'', component: PedidosComponent}
]

@NgModule({
  declarations:[PedidosComponent,PedidosItemsComponent,DeliveryComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class PedidoModule {}