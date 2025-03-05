import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  async login() {
    try {
      const user = await this.authService.login(this.email, this.password);
      if (user) {
        console.log('Login successful!', user);
        this.router.navigate(['/foods']);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  }
}
