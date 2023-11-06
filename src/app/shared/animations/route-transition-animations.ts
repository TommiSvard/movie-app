import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
export const routeTransitionAnimations = trigger('pageTransition', [
    transition('One => Two', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'inherit',
      top: '50vh',
      left: 0,
      height: '100vh',
    })
  ]),
  query(':enter', [style({ top: '100vh' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('0.5s ease-in', style({ top: '-100vh'}))]),
    query(':enter', [animate('0.5s ease-in', style({ top: '0vh' }))])
   ]),
   query(':enter', animateChild())
 ]),
    transition('Two => One', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'inherit',
      top: '50vh',
      left: 0,
      height: '100vh',
    })
  ]),
  query(':enter', [style({ top: '-100vh' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('0.3s ease-in', style({ top: '100vh'}))]),
    query(':enter', [animate('0.5s ease-in', style({ top: '0vh' }))])
   ]),
   query(':enter', animateChild())
 ])
]); 