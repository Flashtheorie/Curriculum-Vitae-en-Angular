import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{
  showMenu: boolean | undefined;

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
  
  toggleDarkMode() {
    document.documentElement.classList.toggle('dark')
    localStorage['theme'] = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  }
}
