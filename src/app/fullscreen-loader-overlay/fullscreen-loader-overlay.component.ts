import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-fullscreen-loader-overlay',
  templateUrl: './fullscreen-loader-overlay.component.html',
  styleUrls: ['./fullscreen-loader-overlay.component.scss']
})
export class FullscreenLoaderOverlayComponent {
  @Input() loadingHeader;
  @Input() loadingMessage;
  @Input() isLoading;
}
