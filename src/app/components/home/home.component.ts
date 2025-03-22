import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  constructor(private router: Router) {}

  heroImage = `assets/hero-image.jpg`;
  
  technologies = [
    { name: 'Angular', icon: 'bi-code-slash' },
    { name: 'TypeScript', icon: 'bi-file-earmark-code' },
    { name: 'Node.js', icon: 'bi-code-square' },
    { name: 'MongoDB', icon: 'bi-database' },
    { name: 'AWS', icon: 'bi-cloud' },
    { name: 'Docker', icon: 'bi-box-seam' },
    { name: 'Git', icon: 'bi-git' }
  ];

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
} 