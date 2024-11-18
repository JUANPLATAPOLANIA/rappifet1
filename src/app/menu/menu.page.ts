import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category.model';
import { Food } from '../models/food.model';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  foods: Food[] = [];
  filteredFoods: Food[] = [];

  constructor(private foodService: FoodService, private router: Router) {}

  ngOnInit() {
    this.getCategories();
    this.filteredCategories = [...this.categories];

    // Suscripción al Observable de getFoods()
    this.foodService.getFoods().subscribe(
      (foods: Food[]) => {
        this.foods = foods;
        this.filteredFoods = [...this.foods];
      },
      (error: any) => {
        console.error('Error al obtener los alimentos:', error);
      }
    );
  }

  getCategories() {
    this.categories = [
      { id: 1, etiqueta: 'Empanadas', imagen: 'assets/empanadas.jpg', activa: true },
      { id: 2, etiqueta: 'Pasteles', imagen: 'assets/pasteles.jpg', activa: false },
      { id: 3, etiqueta: 'Helados', imagen: 'assets/helados.jpg', activa: false },
      { id: 4, etiqueta: 'Jugos', imagen: 'assets/jugos.jpg', activa: true },
    ];
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();

    this.filteredCategories = this.categories.filter((category) =>
      category.etiqueta.toLowerCase().includes(query)
    );

    this.filteredFoods = this.foods.filter(
      (food) =>
        food.titulo.toLowerCase().includes(query) ||
        (food.descripcion && food.descripcion.toLowerCase().includes(query))
    );
  }

  goToDetailPage(foodId: number) {
    this.router.navigate(['/detail', foodId]);
  }
}
