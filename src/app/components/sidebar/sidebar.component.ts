import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public sidebarOpen:boolean = true;
  constructor(){

  }

  onSidebarToggle(){
    this.sidebarOpen = !this.sidebarOpen;
  }
}
