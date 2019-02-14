import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-hero-list-enter-leave',
  templateUrl: './hero-list-enter-leave.component.html',
  styleUrls: ['./hero-list-enter-leave.component.scss'],
})
export class HeroListEnterLeaveComponent implements OnInit {
  @Input() heroName: string;
  @Output() onRemove = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  removeHero() {
    this.onRemove.emit(this.heroName);
  }
}
