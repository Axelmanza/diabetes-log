import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Food } from 'src/app/interfaces/food.model';
import { MealLog } from 'src/app/interfaces/meal-log.model';
import { FoodService } from 'src/app/shared/food.service';
import { MealLogService } from 'src/app/shared/meal.service';

@Component({
  selector: 'app-meal-log',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meal-log.component.html',
  styleUrls: ['./meal-log.component.scss'],
})
export class MealLogComponent {
  foods: Food[] = [];
  mealLogs: any[] = [];
  selectedFood!: Food;

  constructor(
    private foodService: FoodService,
    private mealLogService: MealLogService,
  ) {}

  ngOnInit() {
    this.foodService.getFoods().subscribe((data: any) => {
      this.foods = data;
    });

    this.mealLogService.getMealLogsByUser('userId').subscribe((logs: any) => {
      this.mealLogs = logs;
    });
  }

  logMeal() {
    if (this.selectedFood) {
      const newMeal = {
        userId: 'userId',
        date: new Date(),
        foods: [this.selectedFood],
        totalCarbohydrates: this.selectedFood.carbohydratesPerPortion,
      };
      this.mealLogService.addMealLog(newMeal);
    }
  }
  formatMealFoods(meal: MealLog): string {
    return meal.foods.map((f) => f.name).join(', ');
  }
}
