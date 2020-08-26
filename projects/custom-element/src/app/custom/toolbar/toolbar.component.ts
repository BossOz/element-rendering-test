import { Component, OnInit } from '@angular/core';
import { CustomComponent } from '../custom.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  owneWindow: CustomComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

  get isButtonOneVisible(): boolean {
    if(this.owneWindow == null) return false;
    return this.owneWindow.isButtonOneVisible;    
  }

  get isButtonTwoVisible(): boolean {
    if(this.owneWindow == null) return false;
    return this.owneWindow.isButtonTwoVisible;    
  }

  buttonOneClicked(event){
    console.log("buttonOneClicked", event);
  }

  buttonTwoClicked(event){
    console.log("buttonTwoClicked", event);
  }
}
