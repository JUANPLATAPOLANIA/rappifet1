import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Observable<Food[]> {
    return of([  // Esto sigue siendo un Observable de un array de alimentos
      { id: 1, titulo: 'Huevos pericos con arepa y arroz', precio: 7000, imagen: 'assets/huevos.jpg', descripcion: 'Deliciosos desayunos caseros' },
      { id: 2, titulo: 'Aborrajados', precio: 3000, imagen: 'assets/aborrajados.jpg', descripcion: 'Plato típico' },
      { id: 3, titulo: 'Coca Cola 1.5L', precio: 8000, imagen: 'assets/cocacola.png', descripcion: 'Bebida refrescante' },
      { id: 4, titulo: 'Galletas Chokis', precio: 2000, imagen: 'assets/galletas.png', descripcion: 'Snack dulce' },
      { id: 5, titulo: 'Almuerzo casero', precio: 10000, imagen: 'assets/almuerzos.jpg', descripcion: 'Almuerzo completo' },
      { id: 6, titulo: 'Combo de chocolate con queso y pan de bono', precio: 5000, imagen: 'assets/chocolate.jpg', descripcion: 'Combo de desayuno' },
      { id: 7, titulo: 'Empanadas', precio: 2000, imagen: 'assets/empanadas.jpg', descripcion: 'Deliciosas empanadas de pollo y carne' },
      { id: 8, titulo: 'Helados Caseros', precio: 1000, imagen: 'assets/helados.jpg', descripcion: 'Deliciosos Helados caseros de diferentes sabores como mora,coco que estan listos para refresar tu mañana' },
      { id: 9, titulo: 'Limonada con panela', precio: 3000, imagen: 'assets/jugos.jpg', descripcion: 'Deliciosos jugos para refrescarte con algo natural como la limonada de panela! ' },
      { id: 10, titulo: 'yutad', precio: 5000, imagen: 'assets/jugos.jpg', descripcion: 'Deliciosos jugos para refrescarte con algo natural como la limonada de panela! ' },
    ]);
  }

  getFood(id: number): Observable<Food | undefined> {
    
    return new Observable(observer => {
      this.getFoods().subscribe(foods => {
        const food = foods.find((food) => food.id === id); 
        observer.next(food);
        observer.complete();
      });
    });
  }
}
