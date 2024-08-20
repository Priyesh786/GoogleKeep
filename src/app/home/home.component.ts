import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(){}
  ngOnInit(){}
  selectedTitle = 'Keep';
  isSidebarOpen = false;
  toggleSidebar() {
    console.log(" rtyuijhbvnm "+this.isSidebarOpen)
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  selectTitle(title: string) {
    this.selectedTitle = title;
  }
}
