import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { FoodCardComponent } from '../components/food-card/food-card.component';
import { FoodModel } from '../interfaces/food.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FoodCardComponent],
})
export class CalculatorComponent {
  fooModel: FoodModel = {
    name: 'spaghetti',
    hcPortion: 50,
  };

  constructor() {}
}
