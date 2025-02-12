// Food Service: Handles food data from Firestore with error handling
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Food } from '../interfaces/food.model';

@Injectable({ providedIn: 'root' })
export class FoodService {
  constructor(private firestore: AngularFirestore) {}

  getFoods(): Observable<Food[]> {
    return this.firestore
      .collection<Food>('Foods')
      .valueChanges()
      .pipe(
        catchError((error) => {
          throw new Error(`Failed to fetch foods: ${error.message}`);
        }),
      );
  }

  addFood(food: Food): Observable<any> {
    return from(this.firestore.collection('Foods').add(food)).pipe(
      catchError((error) => {
        throw new Error(`Failed to add food: ${error.message}`);
      }),
    );
  }

  getFoodByBarcode(barcode: string): Observable<Food[]> {
    return this.firestore
      .collection<Food>('Foods', (ref) => ref.where('barcode', '==', barcode))
      .valueChanges()
      .pipe(
        catchError((error) => {
          throw new Error(`Failed to fetch food by barcode: ${error.message}`);
        }),
      );
  }
}
