import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { HeroListEnterLeaveComponent } from './animated-list/hero-list-enter-leave/hero-list-enter-leave.component';
import { HeroListComponent } from './animated-list/hero-list/hero-list.component';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {HttpClientModule} from '@angular/common/http';
import {CVSHttpClient} from './cvs-http-client.service';
import { LoaderOverlayComponent } from './loader-overlay/loader-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    HeroListEnterLeaveComponent,
    HeroListComponent,
    LoadingButtonComponent,
    LoaderOverlayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [CVSHttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
