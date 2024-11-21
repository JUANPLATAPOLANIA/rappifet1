import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Transferencia2Page } from './transferencia2.page';

const routes: Routes = [
  {
    path: '',
    component: Transferencia2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Transferencia2PageRoutingModule {}
