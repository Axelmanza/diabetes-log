// Auth Service: Handles user authentication with error handling and observables
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { from, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../interfaces/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  register(email: string, password: string, name: string): Observable<User> {
    return from(
      this.afAuth.createUserWithEmailAndPassword(email, password),
    ).pipe(
      map((userCredential: any) => {
        const user = userCredential.user;
        return {
          uid: user.uid,
          email: user.email ?? '',
          name: name,
        } as User;
      }),
      catchError((error) => {
        throw new Error(`Registration failed: ${error.message}`);
      }),
    );
  }

  login(email: string, password: string): Observable<User> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password)).pipe(
      map((userCredential: any) => {
        const user = userCredential.user;
        return {
          uid: user.uid,
          email: user.email ?? '',
          name: user.displayName ?? '',
        } as User;
      }),
      catchError((error) => {
        throw new Error(`Login failed: ${error.message}`);
      }),
    );
  }

  logout(): Observable<void> {
    return from(this.afAuth.signOut()).pipe(
      catchError((error) => {
        throw new Error(`Logout failed: ${error.message}`);
      }),
    );
  }
  isAuthenticated(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.afAuth.authState.subscribe((user) => {
        observer.next(!!user);
      });
    });
  }
}
