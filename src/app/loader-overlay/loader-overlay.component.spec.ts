import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoaderOverlayComponent} from './loader-overlay.component';
import {MatProgressSpinnerModule} from '@angular/material';
import {By} from '@angular/platform-browser';

fdescribe('Given LoaderOverlayComponent', () => {
  let component: LoaderOverlayComponent;
  let fixture: ComponentFixture<LoaderOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderOverlayComponent],
      imports: [MatProgressSpinnerModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When neither a loading header nor a loading message are provided', () => {
    it('Then there is a spinner but no header or message present', () => {
      expect(fixture.nativeElement.querySelector('mat-spinner')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('h2')).toBeFalsy();
      expect(fixture.nativeElement.querySelector('p')).toBeFalsy();
    });
  });
  describe('When a loading header IS provided but a loading message is NOT provided', () => {
    it('Then there is a spinner and a header but no message present', () => {
      component.loadingHeader = 'Header';
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('mat-spinner')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('h2').innerText).toEqual('Header');
      expect(fixture.nativeElement.querySelector('p')).toBeFalsy();
    });
  });
  describe('When a loading message IS provided but a loading header is NOT provided', () => {
    it('Then there is a spinner and a message but no message present', () => {
      component.loadingMessage = 'Idk, something';
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('mat-spinner')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('h2')).toBeFalsy();
      expect(fixture.nativeElement.querySelector('p').innerText).toEqual('Idk, something');
    });
  });
  describe('When BOTH a loading message and loading header are provided', () => {
    it('Then there is a spinner and a message but no message present', () => {
      component.loadingHeader = 'Header';
      component.loadingMessage = 'Idk, something';
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('mat-spinner')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('h2').innerText).toEqual('Header');
      expect(fixture.nativeElement.querySelector('p').innerText).toEqual('Idk, something');
    });
  });
  describe('When fullscreen input is false', () => {
    it('Then the spinner-overlay has the styling for a contained overlay', () => {
      component.fullscreen = false;
      fixture.detectChanges();
      const spinnerOverlay = fixture.debugElement.query(By.css('#spinner-overlay')).nativeElement;

      expect(spinnerOverlay.classList).toContain('contained-overlay');
    });
  });
  describe('When fullscreen input is true', () => {
    it('Then the spinner-overlay has the styling for a fullscreen overlay', () => {
      component.fullscreen = true;
      fixture.detectChanges();
      const spinnerOverlay = fixture.debugElement.query(By.css('#spinner-overlay')).nativeElement;

      expect(spinnerOverlay.classList).toContain('fullscreen-overlay');
    });
  });
});
