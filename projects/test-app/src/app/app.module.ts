import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NgZone } from '@angular/core';

import { AppComponent } from './app.component';

import { LazyElementsModule } from '@angular-extensions/elements';
import { ElementContainerComponent } from './element-container/element-container.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    ElementContainerComponent
  ],
  imports: [
    BrowserModule,
    LazyElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngZone: NgZone) {
    (window as any).ngZone = this.ngZone; // store ngZone reference on the window object
  }
}
