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
