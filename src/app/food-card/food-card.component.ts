import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../models/food.model';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent {
  @Input() item: Food | undefined;
  @Output() clicked = new EventEmitter<void>();

  onCardClick() {
    this.clicked.emit();
  }
}
