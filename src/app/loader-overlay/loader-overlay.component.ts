import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-loader-overlay',
  templateUrl: './loader-overlay.component.html',
  styleUrls: ['./loader-overlay.component.scss']
})
export class LoaderOverlayComponent {
  @Input() loadingHeader;
  @Input() loadingMessage;
  @Input() fullscreen;
}
