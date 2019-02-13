import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes = ["Dr. IQ", "Brainiact", "Super Cat"]

  constructor() { }

  ngOnInit() {
  }

  addHero() {
    
  }
}
