import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })), state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })), state('inProgress', style({
        height: '150px',
        opacity: 0.75,
        backgroundColor: 'orange'
      })), transition('* => closed', [
        animate('1s')
      ]), transition('* => open', [
        animate('0.5s')
      ])
      , transition('* => inProgress', [
        animate('1s')
      ])
    ])
  ]
})
export class OpenCloseComponent {
  isOpen = true;
  inProgress = false;

  toggle() {
    if(!this.inProgress) {
      this.inProgress = true
    } else {
      this.inProgress = false;
      this.isOpen = !this.isOpen;
    }
  }

  get buttonProgress(): string {
    if(this.inProgress) {
      return 'inProgress';
    } else {
      return this.isOpen ? 'open' : 'closed';
    }
  }
}
