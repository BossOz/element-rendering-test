import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CustomComponent } from './custom/custom.component';
import { createCustomElement } from "@angular/elements";
import { ToolbarComponent } from './custom/toolbar/toolbar.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [ToolbarComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    // Create the instance of the components we want to use outside
    const custom = createCustomElement(CustomComponent, { injector: this.injector });
    customElements.define("vdr-custom", custom);
  }
  
}