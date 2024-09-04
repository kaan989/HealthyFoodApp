import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  teamMembers = [
    {
      name: 'Kaan Pehlivan',
      role: 'CEO & Founder',
      bio: 'Creater of the Healthy Food Application',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQFzHBHe2WgLgQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706274325433?e=1730937600&v=beta&t=jCVj9ngpN2ca695YwX9SitTgPN0wIG38HTFRV3QAyQQ'
    },
    
    // Diğer ekip üyelerini buraya ekleyebilirsiniz
  ];
}