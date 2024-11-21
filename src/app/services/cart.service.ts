import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CartItem } from "../models/cart-item.model";
import { map } from "rxjs/operators"; // Solo necesitas importarlo desde "rxjs/operators"

@Injectable({
  providedIn: "root",
})
export class CartService {
  private item$ = new BehaviorSubject<CartItem[]>([]);

  getCart() {
    return this.item$.asObservable();
  }

  
  addToCart(newItem: CartItem) {
    this.item$.next([...this.item$.getValue(), newItem]);
  }

  removeItem(id: number) {
    this.item$.next(this.item$.getValue().filter((item) => item.id !== id));
  }

  changeQty(cantidad: number, id: number) {
    const items = this.item$.getValue();
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      items[index].cantidad += cantidad;
      this.item$.next(items);
    }
  }

  getTotalAmount() {
    return this.item$.pipe(
      map((items) => {
        let total = 0;
        items.forEach((item) => {
          total += item.cantidad * item.precio;
        });
        return total;
      })
    );
  }
}

