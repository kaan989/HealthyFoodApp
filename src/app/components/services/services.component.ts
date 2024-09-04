import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  services = [
    {
      name: 'Personalized Meal Plans',
      description: 'Get customized meal plans tailored to your dietary needs and preferences.',
      icon: 'fas fa-utensils'
    },
    {
      name: 'Expert Nutrition Advice',
      description: 'Receive guidance from our expert nutritionists to make informed food choices.',
      icon: 'fas fa-apple-alt'
    },
    {
      name: 'Healthy Recipe Database',
      description: 'Access a wide variety of healthy recipes for every meal and occasion.',
      icon: 'fas fa-receipt'
    },
    {
      name: 'Cooking Tips & Tricks',
      description: 'Learn helpful tips and techniques to enhance your cooking skills and make meal prep easier.',
      icon: 'fas fa-hamburger'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }
}