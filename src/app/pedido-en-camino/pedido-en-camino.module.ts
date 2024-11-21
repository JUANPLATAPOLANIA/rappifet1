import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoEnCaminoPageRoutingModule } from './pedido-en-camino-routing.module';

import { PedidoEnCaminoPage } from './pedido-en-camino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoEnCaminoPageRoutingModule
  ],
  declarations: [PedidoEnCaminoPage]
})
export class PedidoEnCaminoPageModule {}
