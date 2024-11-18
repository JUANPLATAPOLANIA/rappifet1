import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../models/food.model';  // Asegúrate de importar el modelo Food
import { CartItem } from '../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() item!: CartItem;  
  @Output() increase = new EventEmitter();
  @Output()decrease = new EventEmitter();
}
