import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Movie Rating Platform',
      description: 'A sentiment analysis-based movie rating platform that analyzes user reviews to generate accurate movie ratings and recommendations.',
      image: 'assets/project1.jpg',
      technologies: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL', 'NLTK', 'Beautiful Soup'],
      liveLink: 'https://movie-rating-platform.vercel.app',
      githubLink: 'https://github.com/muralibadiginti/movie-rating-platform',
      features: [
        'Sentiment analysis of user reviews',
        'Automated rating generation',
        'Movie recommendation system',
        'User review management',
        'Admin dashboard for content moderation'
      ],
      category: 'Web Application & ML'
    },
    {
      title: 'Voice Recognition System',
      description: 'An advanced voice recognition system that converts speech to text and executes voice commands with high accuracy.',
      image: 'assets/project2.jpg',
      technologies: ['Python', 'TensorFlow', 'PyAudio', 'SpeechRecognition', 'NumPy', 'Scikit-learn'],
      liveLink: 'https://voice-recognition.vercel.app',
      githubLink: 'https://github.com/muralibadiginti/voice-recognition',
      features: [
        'Real-time speech-to-text conversion',
        'Voice command execution',
        'Multiple language support',
        'Custom command training',
        'Noise reduction algorithms'
      ],
      category: 'Machine Learning'
    },
    {
      title: 'Color Game',
      description: 'An interactive RGB color guessing game that helps users learn and understand RGB color combinations.',
      image: 'assets/project3.jpg',
      technologies: ['Python', 'Tkinter', 'Pygame', 'Numpy'],
      liveLink: 'https://color-game.vercel.app',
      githubLink: 'https://github.com/muralibadiginti/color-game',
      features: [
        'Multiple difficulty levels',
        'Score tracking system',
        'Interactive color mixing',
        'Learning mode with hints',
        'Color theory tutorials'
      ],
      category: 'Desktop Application'
    },
    {
      title: 'Wallet App',
      description: 'A secure digital wallet application for managing expenses, tracking investments, and handling cryptocurrency transactions.',
      image: 'assets/project3.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Nest.js', 'Redis', 'JWT', 'Socket.io'],
      liveLink: 'https://wallet-app.vercel.app',
      githubLink: 'https://github.com/muralibadiginti/wallet-app',
      features: [
        'Sign up/Login',
        'Wallet transactions',
        'Transaction history',
        'Transaction status',
        'Exporting Transactions'
      ],
      category: 'Full Stack Application'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing professional experience, projects, and technical skills.',
      image: 'assets/project1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Nest.js', 'Bootstrap', 'Angular Animations'],
      liveLink: 'https://murali-portfolio.vercel.app',
      githubLink: 'https://github.com/muralibadiginti/portfolio',
      features: [
        'Responsive design',
        'Interactive UI animations',
        'Project showcase with filtering',
        'Contact form with validation',
        'Dynamic content management'
      ],
      category: 'Frontend Development'
    }
  ];

  selectedProject: any = null;

  showProjectDetails(project: any) {
    this.selectedProject = project;
  }

  closeProjectDetails() {
    this.selectedProject = null;
  }
} 