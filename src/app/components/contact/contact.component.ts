import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  contactForm: FormGroup;
  contactInfo = [
    {
      icon: 'bi-envelope-fill',
      title: 'Email',
      value: 'muralibadiginti1999@gmail.com',
      link: 'mailto:muralibadiginti1999@gmail.com',
      color: '#0d6efd'
    },
    {
      icon: 'bi-linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/murali-badiginti',
      link: 'https://www.linkedin.com/in/murali-badiginti-532600153/',
      color: '#0a66c2'
    },
    {
      icon: 'bi-github',
      title: 'GitHub',
      value: 'github.com/murali-badiginti',
      link: 'https://github.com/muralibadiginti',
      color: '#333'
    },
    {
      icon: 'bi-geo-alt-fill',
      title: 'Location',
      value: 'Hyderabad, India',
      color: '#dc3545'
    }
  ];
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(this.contactForm.value);
        this.contactForm.reset();
      } catch (error) {
        // Add error handling
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  getErrorMessage(field: string): string {
    const control = this.contactForm.get(field);
    if (control?.hasError('required')) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (control?.hasError('minlength')) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is too short`;
    }
    return '';
  }
} 