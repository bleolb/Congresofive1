import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { AdministratorsService } from './guard/ValidationRol/administrators.service';
import { ReviewerService } from './guard/ValidationRol/reviewer.service';
import { OrganizerService } from './guard/ValidationRol/organizer.service';
import { SpeakerService } from './guard/ValidationRol/speaker.service';
import { AssistantService } from './guard/ValidationRol/assistant.service'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AdministratorsService, ReviewerService, OrganizerService, SpeakerService, AssistantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
