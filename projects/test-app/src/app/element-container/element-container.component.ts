import { Component, OnInit, Input, ViewRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-element-container',
  templateUrl: './element-container.component.html',
  styleUrls: ['./element-container.component.css']
})
export class ElementContainerComponent implements OnInit {

  @Input() name: string = "";
    
  private objInstance: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  loadCompleted(componentInstance: any) {
    this.objInstance = componentInstance;
  }

  getToolbarFactory(resolver: ComponentFactoryResolver): ComponentFactory<any> {
    if(this.objInstance == null) return null;
    return this.objInstance.getToolbarFactory(resolver);    
  }
}
