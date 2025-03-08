import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import foodList, { Food } from 'src/app/interfaces/food.model';
import { FoodService } from 'src/app/shared/food.service';

@Component({
  selector: 'app-food-list',
  standalone: true,
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
  imports: [CommonModule],
  template: ``,
})
export class FoodListComponent implements OnInit {
  foods: Food[] = []; // Array de alimentos

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.foodService.getFoods().subscribe((data) => {
      this.foods = foodList;
    });
  }

  addFood() {
    const newFood = {
      name: 'Nuevo Alimento',
      carbohydratesPerPortion: 0,
      calories: 0,
      protein: 0,
      fat: 0,
    };

    this.foods.push(newFood);
  }
}
