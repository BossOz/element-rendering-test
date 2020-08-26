import { 
  Component, ViewChild, ViewContainerRef, 
  AfterViewInit, ComponentFactoryResolver, 
  Inject, Injector, ApplicationRef, ComponentRef, NgModuleRef 
} from '@angular/core';

import { ElementContainerComponent } from './element-container/element-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('elemContainer', { read: ViewContainerRef })objectContainerRef: ViewContainerRef;
  @ViewChild("toolbarComponent", { read: ViewContainerRef }) toolbarComponentContainerRef: ViewContainerRef;
  
  // Object cache
  private objectContainerRefList: Map<number, ComponentRef<ElementContainerComponent>>;
  private activeObjId: number;

  constructor(private resolver: ComponentFactoryResolver, 
              @Inject(NgModuleRef) private moduleRef: NgModuleRef<any>,
              @Inject(Injector) private injector: Injector) {
  
      this.objectContainerRefList = new Map();
  }

  ngAfterViewInit(): void { 
    this.loadElement(0, "FIRST");
  }

  switchElement() { 
    if(this.activeObjId == 0) {
      this.loadElement(1, "SECOND");
    } else {
      this.loadElement(0, "FIRST");
    }    
  }

  loadElement(id: number, name: string) {
    if(this.objectContainerRef == null) return;

    // Check if the instance is already in the cache
    let componentInstance = this.objectContainerRefList.get(id);
    
    if(componentInstance == null) {
      // Resolve the obj factory
      const factory = this.resolver.resolveComponentFactory(ElementContainerComponent);
      if (factory == null) return;
      
      // Create the component
      componentInstance = factory.create(this.injector, [], null, this.moduleRef);
           
      // Set the properties
      componentInstance.instance.name = name;
      //componentInstance.instance.ownerWindow = this;
      
      // Save the instance in the cache
      this.setObjectContainerRef(id, componentInstance);
    }
    
    this.activeObjId = id;
     
    // Attach the obj in the DOM
    //this.objectContainerRef.detach();
    
    setTimeout(() => {
      this.objectContainerRef.insert(componentInstance.hostView, 0);
    }, 100);
    
  }

  private setObjectContainerRef(objectUid: number, componentInstance: any) {
      this.objectContainerRefList.delete(objectUid);
      this.objectContainerRefList.set(objectUid, componentInstance);
  }

  loadToolbar() {
    
    let componentInstance = this.objectContainerRefList.get(this.activeObjId);
    if(componentInstance == null) return;

    const factory = componentInstance.instance.getToolbarFactory(this.resolver);

    if (factory) {
      // Create component
      const componentInstance = factory.create(this.injector, [], null, this.moduleRef);
      //componentInstance.instance.ownerWindow = ownerWindow;
      this.toolbarComponentContainerRef.insert(componentInstance.hostView, 0);
    }

  }

}
