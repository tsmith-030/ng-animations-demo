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
  @Input() overlayLoader: boolean;
  loadingHeader = "Loading Content"
  loadingMessage = "Please wait a moment"

  @Output() onSuccess: EventEmitter<any> = new EventEmitter();
  @Output() onFailure: EventEmitter<any> = new EventEmitter();

  @ViewChild('buttonElement')
  buttonElement: ElementRef;

  private buttonHeight;
  private buttonWidth;

  ngAfterViewInit(): void {
    setTimeout(() => { //timeout is needed here to wait one tick until the view is ready
        this.buttonHeight = this.buttonElement.nativeElement.offsetHeight;
        this.buttonWidth = this.buttonElement.nativeElement.offsetWidth;
    });
  }

  get showButtonLoader(): boolean {
    return this.loading && !this.overlayLoader;
  }

  get showOverlayLoader(): boolean {
    return this.loading && this.overlayLoader;
  }

  performAsyncAction(): void {
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
  }
}
