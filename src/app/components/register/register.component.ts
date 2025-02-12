import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: ``,
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.email, this.password, this.name);
  }
}
