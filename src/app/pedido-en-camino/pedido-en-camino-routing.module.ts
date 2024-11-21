import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoEnCaminoPage } from './pedido-en-camino.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoEnCaminoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoEnCaminoPageRoutingModule {}
