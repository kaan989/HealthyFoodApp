import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppUser } from '../../Models/AppUser.Model';
import { NavbarService } from '../../services/navbar.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit, OnDestroy{
  newUser: AppUser = {
    id:"",
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService, private router: Router, private navbarService: NavbarService) { }



  ngOnInit(): void {
    this.navbarService.hide();
  }

  ngOnDestroy(): void {
    this.navbarService.display();
  }

  register() {
    if (this.newUser.password !== this.newUser.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.authService.register(this.newUser).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.router.navigate(['login']);
      },
      error: (error) => {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
      }
    });
  }
}