import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from 'src/app/material-module'
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './components/cards/cards.component';
import { HeaderComponent } from './components/header/header.component';
import { EducardComponent } from './components/educard/educard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProjectsectionComponent } from './components/projectsection/projectsection.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillcardComponent } from './components/skillcard/skillcard.component';
import { ContactComponent } from './components/contact/contact.component'
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardsComponent,
    HeaderComponent,
    EducardComponent,
    HomepageComponent,
    ProjectsectionComponent,
    SkillsComponent,
    FooterComponent,
    SkillcardComponent,
    ContactComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
