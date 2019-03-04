import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {LoadingButtonComponent} from './loading-button.component';
import {MatProgressSpinnerModule} from '@angular/material';
import {FullscreenLoaderOverlayComponent} from '../fullscreen-loader-overlay/fullscreen-loader-overlay.component';
import {By} from '@angular/platform-browser';

fdescribe('Given LoadingButtonComponent', () => {
  let component: LoadingButtonComponent;
  let fixture: ComponentFixture<LoadingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingButtonComponent, FullscreenLoaderOverlayComponent],
      imports: [MatProgressSpinnerModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the view is initialized', () => {
    it('Then the components button height and width are locked in to the initial values', fakeAsync(() => {
      component.ngAfterViewInit();
      tick();
      expect(component['buttonHeight']).toEqual(fixture.nativeElement.querySelector('button').offsetHeight);
      expect(component['buttonWidth']).toEqual(fixture.nativeElement.querySelector('button').offsetWidth);
    }));
  });
  describe('When overlay loader is false and loading is false', () => {
    it('Then the label of the button should be shown based on what was passed in as input', () => {
      component.label = "Click Me";
      component['loading'] = false;
      component.overlayLoader = false;

      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('p').innerText).toEqual('Click Me');
    });
  });
  describe('When overlay loader is false and loading is true', () => {
    it('Then the label of the button should be replaced with the spinner', () => {
      component.label = "Click Me";
      component['loading'] = true;
      component.overlayLoader = false;

      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('p')).toBeFalsy();
      expect(fixture.nativeElement.querySelector('mat-spinner')).toBeTruthy();
    });
  });
  describe('When loading is true but overlay loader is also true', () => {
    beforeEach(() => {
      component.label = "Click Me";
      component['loading'] = true;
      component.overlayLoader = true;
      component.loadingHeader = "Header";
      component.loadingMessage = "idk, something";

      fixture.detectChanges();
    });

    it('Then the label of the button should still be shown and the loader overlay should be shown with the header and message' +
      'provided as an input to this component', () => {
      expect(fixture.nativeElement.querySelector('p').innerText).toEqual('Click Me');
    });
    it('Then the loader overlay should be shown', () => {
      expect(fixture.nativeElement.querySelector('app-fullscreen-loader-overlay')).toBeTruthy();
    });
    it('Then the loader overlay should have a header and message based on what was passed into this component', () => {
      let overlay = fixture.debugElement.query(By.css('app-fullscreen-loader-overlay'))
      expect(overlay.attributes['ng-reflect-loading-header']).toEqual('Header');
      expect(overlay.attributes['ng-reflect-loading-message']).toEqual('idk, something');
    });
  });

  describe('When the button has initially rendered, thus setting buttonHeight and Width', () => {
    beforeEach(() => {
      component.label = "Click Me";
      component['loading'] = true;
      component.overlayLoader = true;
      component.loadingHeader = "Header";
      component.loadingMessage = "idk, something";

      fixture.detectChanges();
    });

    it('Then the label of the button should still be shown and the loader overlay should be shown with the header and message' +
      'provided as an input to this component', () => {
      expect(fixture.nativeElement.querySelector('p').innerText).toEqual('Click Me');
    });
    it('Then the loader overlay should be shown', () => {
      expect(fixture.nativeElement.querySelector('app-fullscreen-loader-overlay')).toBeTruthy();
    });
    it('Then the loader overlay should have a header and message based on what was passed into this component', () => {
      let overlay = fixture.debugElement.query(By.css('app-fullscreen-loader-overlay'))
      expect(overlay.attributes['ng-reflect-loading-header']).toEqual('Header');
      expect(overlay.attributes['ng-reflect-loading-message']).toEqual('idk, something');
    });
  });

  describe('When the button is clicked', () => {
    it('Then the performAsyncAction function is invoked', () => {
      const performAsyncActionSpy = spyOn(component, 'performAsyncAction')
      fixture.nativeElement.querySelector('button').click();
      expect(performAsyncActionSpy).toHaveBeenCalled();
    });
  });

  //TODO: ngClass tests for button sizing once we know if it needs to be altered to be more dynamic
  //TODO: performAsyncAction test once final implementation is established
});
