import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { CartService } from '../services/cart.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems$!: Observable<CartItem[]>;
  totalAmount$!: Observable<number>;  

  constructor(private cartService: CartService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.cartItems$ = this.cartService.getCart();
    this.totalAmount$ = this.cartService.getTotalAmount();
  }

  onIncrease(item: CartItem) {
    this.cartService.changeQty(1, item.id);
  }

  onDecrease(item: CartItem) {
    if (item.cantidad === 1) this.removeFromCart(item);
    else this.cartService.changeQty(-1, item.id);
  }

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
}
