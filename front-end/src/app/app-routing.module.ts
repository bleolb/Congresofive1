import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {PageNotFoundComponent} from './home/page-not-found/page-not-found.component';
import { AdministratorsService } from './guard/ValidationRol/administrators.service';
import { ReviewerService } from './guard/ValidationRol/reviewer.service';
import { OrganizerService } from './guard/ValidationRol/organizer.service';
import { SpeakerService } from './guard/ValidationRol/speaker.service';
import { AssistantService } from './guard/ValidationRol/assistant.service'
import { from } from 'rxjs';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent,canActivate: [AdministratorsService]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
