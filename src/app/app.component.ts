import { Component } from '@angular/core';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFxVcQos-Gt2HX3wgAizoIRIEeF5U56kE",
  authDomain: "antoinepascual-90720.firebaseapp.com",
  projectId: "antoinepascual-90720",
  storageBucket: "antoinepascual-90720.appspot.com",
  messagingSenderId: "548802658013",
  appId: "1:548802658013:web:6d86342a46361cd1616534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Antoine Pascual`;
  css = `TailwindCSS`;
  constructor() {
    
  }
}
