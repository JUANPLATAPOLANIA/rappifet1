import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Transferencia2PageRoutingModule } from './transferencia2-routing.module';

import { Transferencia2Page } from './transferencia2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Transferencia2PageRoutingModule
  ],
  declarations: [Transferencia2Page]
})
export class Transferencia2PageModule {}
