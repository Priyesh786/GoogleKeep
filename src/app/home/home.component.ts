import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showNotesComponent = false;
  searchQuery: string = "";
  constructor(){}
  selectedTitle = 'Keep';
  isSidebarOpen = false;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  selectTitle(title: string) {
    this.selectedTitle = title;
  }
}
