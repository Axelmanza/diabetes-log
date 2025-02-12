import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';

// Auth Guard: Protects routes from unauthorized access
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.authService.isAuthenticated().subscribe((isAuth) => {
        if (!isAuth) {
          this.router.navigate(['/login']);
        }
        observer.next(isAuth);
      });
    });
  }
}
