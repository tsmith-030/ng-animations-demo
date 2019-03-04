import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoaderOverlayContainerComponent} from './loader-overlay-container.component';
import {MatProgressSpinnerModule} from '@angular/material';

fdescribe('Given LoaderOverlayContainerComponent', () => {
  let component: LoaderOverlayContainerComponent;
  let fixture: ComponentFixture<LoaderOverlayContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderOverlayContainerComponent],
      imports: [MatProgressSpinnerModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderOverlayContainerComponent);
    component = fixture.componentInstance;
    component.isLoading = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When isLoading is false', () => {
    it('Then the loader is not displayed', () => {
      component.isLoading = false;
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('mat-spinner')).toBeFalsy();
    });

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
});
