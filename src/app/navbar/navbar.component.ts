import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  [x: string]: any;
  constructor(@Inject(DOCUMENT) private document: Document) {}
    
  toggleDarkMode()
  {
    if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this['document'].body.classList.add('dark');
    } else {
      this['document'].body.classList.remove('dark');
    }
    
    
  }
  


}
