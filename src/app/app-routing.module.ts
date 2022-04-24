import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LangagesComponent } from './langages/langages.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectsComponent } from './projects/projects.component';
import { SendemailComponent } from './sendemail/sendemail.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ParcoursComponent } from './parcours/parcours.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'langages', component: LangagesComponent },
  { path: 'projets', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sendemail', component: SendemailComponent},
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'parcours', component: ParcoursComponent },
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', 
  component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
