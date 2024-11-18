import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { CategoryItemModule } from '../category-item/category-item.module';
import { FoodCardModule } from '../food-card/food-card.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    CategoryItemModule,
    FoodCardModule,
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
