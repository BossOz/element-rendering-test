import { Component, OnInit, Input, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  private _ownerWindow: any;
  get ownerWindow(): any {
    return this._ownerWindow;
  }
  @Input() 
  set ownerWindow (value: any) {
    this._ownerWindow = value;

    if(this._ownerWindow != null) {
      this._ownerWindow.loadCompleted(this);
    }

  }
  
  @Input() name: string = "";

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void { }

  getToolbarFactory(): ComponentFactory<any> {
    // Create the toolbar component
    const factory = this.resolver.resolveComponentFactory(ToolbarComponent);
    if (factory == null) {
        return null;
    }
    return factory;
  }

}
