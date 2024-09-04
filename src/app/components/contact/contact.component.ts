import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactInfo = {
    name: 'Kaan Pehlivan',
    email: 'kaanpeh@gmail.com',
    phone: '+905051373507'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
