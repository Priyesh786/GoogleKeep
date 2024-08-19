import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  password: string | undefined;
  confirmPassword: string | undefined;
  showPassword: boolean;
  passwordType: string;

  constructor() {
    this.showPassword = false;
    this.passwordType = 'password';
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.passwordType = this.showPassword ? 'text' : 'password';
  }
}
