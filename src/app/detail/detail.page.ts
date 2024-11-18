import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Food } from '../models/food.model';
import { CartItem } from '../models/cart-item.model';
import { CartService } from '../services/cart.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  food: Food | undefined;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private toastCtrl: ToastController
  ) {
    this.id = +this.route.snapshot.paramMap.get("id")!;
  }

  ngOnInit() {
    this.foodService.getFood(this.id).subscribe((food) => {
      this.food = food;
    });
  }
  goToDetailPage(){
    
  }

  addItemToCart() {
    if (this.food) { 
      const Cartitem: CartItem = {
        id: this.food.id,
        nombre: this.food.titulo,
        precio: this.food.precio,
        imagen: this.food.imagen!,
        cantidad: 1,
      };
      this.cartService.addToCart(Cartitem);
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "Orden añadida al carrito",
      mode: "ios",
      duration: 1000,
      position: "top",
    });

    toast.present();
  }
}
