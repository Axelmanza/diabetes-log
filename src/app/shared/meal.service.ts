// Meal Log Service: Handles meal logging in Firestore with improved error handling
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MealLog } from '../interfaces/meal-log.model';

@Injectable({ providedIn: 'root' })
export class MealLogService {
  constructor(private firestore: AngularFirestore) {}

  addMealLog(mealLog: MealLog): Observable<any> {
    return from(this.firestore.collection('MealLogs').add(mealLog)).pipe(
      catchError((error) => {
        throw new Error(`Failed to add meal log: ${error.message}`);
      }),
    );
  }

  getMealLogsByUser(userId: string): Observable<MealLog[]> {
    return this.firestore
      .collection<MealLog>('MealLogs', (ref) =>
        ref.where('userId', '==', userId),
      )
      .valueChanges()
      .pipe(
        catchError((error) => {
          throw new Error(`Failed to fetch meal logs: ${error.message}`);
        }),
      );
  }
}
