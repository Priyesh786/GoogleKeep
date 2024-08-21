import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  showNotesComponent = false;
  searchQuery: string = "";
  constructor(private route: Router){}
  selectedTitle = 'Keep';
  isSidebarOpen = false;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  selectTitle(title: string) {
    this.selectedTitle = title;
  }
  logout(): void {
    localStorage.removeItem('access_token');
    this.route.navigate(['/']);
  }
}
