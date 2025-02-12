import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/interfaces/food.model';
import { FoodService } from 'src/app/shared/meal.service';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule],
  template: ``,
})
export class FoodListComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.foodService.getFoods().subscribe((data) => {
      this.foods = data;
    });
  }
}
