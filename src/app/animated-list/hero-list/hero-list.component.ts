import { Component, OnInit } from '@angular/core';
import {animate, animateChild, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('250ms ease-in')
      ]),
      transition(':leave', [
        animate('100ms ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('list', [
      transition(':enter', [
        query('@flyInOut', stagger(300, animateChild()))
      ]),
    ])
  ],
})
export class HeroListComponent implements OnInit {
  heroes = ["Dr. IQ", "Brainiact", "Super Cat"]
  private newHeroName;

  constructor() { }

  ngOnInit() {
  }

  addHero() {
    this.heroes.push(this.newHeroName);
  }

  removeHero(hero: string) {
    console.error('=============>', hero);
    this.heroes = this.heroes.filter(h => {
      return h !== hero;
    })
  }

  onKey($event) {
    if($event.key === 'Enter') {
      this.addHero();
    } else {
      this.newHeroName = $event.target.value;
    }
  }
}
