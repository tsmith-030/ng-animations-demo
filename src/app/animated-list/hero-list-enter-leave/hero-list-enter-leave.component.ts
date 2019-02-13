import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-hero-list-enter-leave',
  templateUrl: './hero-list-enter-leave.component.html',
  styleUrls: ['./hero-list-enter-leave.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition(':leave', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HeroListEnterLeaveComponent implements OnInit {
  @Input() heroName: string;

  constructor() { }

  ngOnInit() {
  }

}
