import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { HeroListEnterLeaveComponent } from './animated-list/hero-list-enter-leave/hero-list-enter-leave.component';
import { HeroListComponent } from './animated-list/hero-list/hero-list.component';
import { LoadingButtonComponent } from './loading-button/loading-button.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    HeroListEnterLeaveComponent,
    HeroListComponent,
    LoadingButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
