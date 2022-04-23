import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  clicSurBouton(){
    alert("Le formulaire de contact n'est pas encore développé.");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
