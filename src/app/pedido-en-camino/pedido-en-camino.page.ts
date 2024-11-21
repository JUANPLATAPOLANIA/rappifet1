import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-en-camino',
  templateUrl: './pedido-en-camino.page.html',
  styleUrls: ['./pedido-en-camino.page.scss'],
})
export class PedidoEnCaminoPage {

  constructor(private router: Router) {}

  VolverAlCarrito() {
    this.router.navigate(['/index/cart']);
  }

}
