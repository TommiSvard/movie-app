import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
export const routeTransitionAnimations = trigger('pageTransition', [
    transition('One => Two', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'inherit',
      top: '50%',
      left: 0,
      height: '100%'
    })
  ]),
  query(':enter', [style({ top: '100%' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('0.5s ease-in', style({ top: '-100%'}))]),
    query(':enter', [animate('0.5s ease-in', style({ top: '0%' }))])
   ]),
   query(':enter', animateChild())
 ]),
    transition('Two => One', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'inherit',
      top: '50%',
      left: 0,
      height: '100%'
    })
  ]),
  query(':enter', [style({ top: '-100%' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('0.3s ease-in', style({ top: '100%'}))]),
    query(':enter', [animate('0.5s ease-in', style({ top: '0%' }))])
   ]),
   query(':enter', animateChild())
 ])
]); 