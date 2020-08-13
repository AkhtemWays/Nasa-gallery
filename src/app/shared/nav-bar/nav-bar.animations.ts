import { trigger, transition, style, animate } from '@angular/animations';
export const fade = trigger('fade', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate(1000, style({ opacity: 1 })),
  ]),
  transition('* => void', [animate(1000, style({ opacity: 0 }))]),
]);
export const transform = trigger('trasform', [
  transition('* => void', [
    animate(3000, style({ transform: 'translateX(200px)' })),
    animate(3000, style({ transform: 'translateX(-10000px)' })),
  ]),
  transition('void => *', [
    animate(3000, style({ transform: 'translateX(-10000px)' })),
    animate(3000, style({ transform: 'translateX(200px)' })),
  ]),
]);
