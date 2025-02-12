// Routing Configuration
import { Routes, provideRouter } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.guard';
import { FoodListComponent } from './components/food-list/food-list.component';
import { LoginComponent } from './components/login/login.component';
import { MealLogComponent } from './components/meal-log/meal-log.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'foods', component: FoodListComponent, canActivate: [AuthGuard] },
  { path: 'meal-log', component: MealLogComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }, // Fallback route
];

export const appRouter = provideRouter(routes);
