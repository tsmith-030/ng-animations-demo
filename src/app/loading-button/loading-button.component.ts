import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CVSHttpClient} from '../cvs-http-client.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss']
})
export class LoadingButtonComponent implements AfterViewInit {
  @Input() label;
  private loading = false;
  @Input() asyncFunction$: Observable<any>;

  @Output() onClick: EventEmitter<any> = new EventEmitter(false);

  @Output() onSuccess: EventEmitter<any> = new EventEmitter();
  @Output() onFailure: EventEmitter<any> = new EventEmitter();

  @ViewChild('buttonElement')
  buttonElement: ElementRef;

  private buttonHeight;
  private buttonWidth;

  ngAfterViewInit(): void {
    setTimeout(() => {
        this.buttonHeight = this.buttonElement.nativeElement.offsetHeight;
        this.buttonWidth = this.buttonElement.nativeElement.offsetWidth;
    });
  }

  getData(): void {
    this.loading = true;

    this.asyncFunction$
      .toPromise()
      .then((res) => {
        this.onSuccess.emit(res);
      })
      .catch((err) => {
        this.onFailure.emit(err);
      }).finally(() => {
          this.loading = false;
    });

    // this.cvsHttpClient.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
    //   .pipe(
    //     startWith(null),
    //     tap((res) => {this.pokemon = res.name}, () => {this.pokemon = 'ERR: Could not retrieve a Pokemon'}, () => {this.loading = false})
    //   );
  }
}
