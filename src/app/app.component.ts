import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX1Bewwy48BQVMT_9AknTfU9I6fRtneWA",
  authDomain: "cv-d-antoine-pascual.firebaseapp.com",
  projectId: "cv-d-antoine-pascual",
  storageBucket: "cv-d-antoine-pascual.appspot.com",
  messagingSenderId: "13048230193",
  appId: "1:13048230193:web:094128ce871d2aadaf8010",
  measurementId: "G-KY4PF5DGE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `CV d'Antoine Pascual`;
  css = `TailwindCSS`;
  constructor() {
    
  }
}
