import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-loader-overlay-container',
  templateUrl: './loader-overlay-container.component.html',
  styleUrls: ['./loader-overlay-container.component.scss']
})
export class LoaderOverlayContainerComponent {
  @Input() loadingHeader;
  @Input() loadingMessage;
  @Input() isLoading;
}
