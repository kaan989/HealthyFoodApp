import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink, RouterModule } from '@angular/router';

import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppUser } from '../../Models/AppUser.Model';
import { NavbarService } from '../../services/navbar.service';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {
  newUser: AppUser = {
    id: "",
    email: '',
    password: '',
    username: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService, private router: Router,private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.hide();
  }

  ngOnDestroy(): void {
    this.navbarService.display();
  }

  login() {
    const { email, password } = this.newUser;

    this.authService.login(email, password).subscribe({
      next: (user) => {
        console.log('Login successful:', user);
        this.router.navigate(['home']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert("Username or password incorrect");
      }
    });
  }
  guestLogin() {
    this.router.navigate(['/home']);
  }

  goToRegister() {
    this.router.navigate(['register']);
  }
}