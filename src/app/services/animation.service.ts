import { Injectable } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  fadeInUp = trigger('fadeInUp', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]);

  fadeInLeft = trigger('fadeInLeft', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(-50px)' }),
      animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
    ])
  ]);

  fadeInRight = trigger('fadeInRight', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(50px)' }),
      animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
    ])
  ]);

  staggerAnimation = trigger('staggerAnimation', [
    transition('* => *', [
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        stagger(100, [
          animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ], { optional: true })
    ])
  ]);

  pulseAnimation = trigger('pulse', [
    transition('* => *', [
      animate('1s ease-in-out', keyframes([
        style({ transform: 'scale(1)', offset: 0 }),
        style({ transform: 'scale(1.05)', offset: 0.5 }),
        style({ transform: 'scale(1)', offset: 1 })
      ]))
    ])
  ]);

  rotateInAnimation = trigger('rotateIn', [
    transition(':enter', [
      style({ opacity: 0, transform: 'rotate(-180deg)' }),
      animate('0.7s ease-out', style({ opacity: 1, transform: 'rotate(0)' }))
    ])
  ]);

  bounceAnimation = trigger('bounce', [
    transition('* => *', [
      animate('1s ease-in-out', keyframes([
        style({ transform: 'translateY(0)', offset: 0 }),
        style({ transform: 'translateY(-20px)', offset: 0.5 }),
        style({ transform: 'translateY(0)', offset: 1 })
      ]))
    ])
  ]);
} 