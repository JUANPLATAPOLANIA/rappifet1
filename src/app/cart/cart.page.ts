import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { CartService } from '../services/cart.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems$!: Observable<CartItem[]>;
  totalAmount$!: Observable<number>;

  constructor(
    private cartService: CartService,
    private alertCtrl: AlertController,
    private router: Router // Inyección del servicio de navegación
  ) {}

  ngOnInit() {
    // Obtener los datos del carrito desde el servicio
    this.cartItems$ = this.cartService.getCart();
    this.totalAmount$ = this.cartService.getTotalAmount();
  }

  // Incrementar cantidad de un artículo
  onIncrease(item: CartItem) {
    this.cartService.changeQty(1, item.id);
  }

  // Reducir cantidad de un artículo
  onDecrease(item: CartItem) {
    if (item.cantidad === 1) this.removeFromCart(item);
    else this.cartService.changeQty(-1, item.id);
  }

  // Eliminar un artículo del carrito con confirmación
  async removeFromCart(item: CartItem) {
    const alert = await this.alertCtrl.create({
      header: 'Borrar',
      message: '¿Estás seguro que quieres eliminar el pedido?',
      buttons: [
        {
          text: 'Sí',
          handler: () => this.cartService.removeItem(item.id),
        },
        {
          text: 'No',
        },
      ],
    });
    alert.present();
  }

  // Redirigir a la página de pagos
  goToPayments() {
    this.router.navigate(['/pagos']);
  }
}
