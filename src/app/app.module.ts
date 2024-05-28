import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navBar/navBar.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialBarComponent } from './components/socialBar/socialBar.component';
import { SkillsComponent } from './components/skills/skills.component'
import { SummaryComponent } from './components/summary/summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayOutComponent } from './components/layOut/layOut.component';
import { ProfolioComponent } from './components/profolio/profolio.component';
import { BackgroundBlockComponent } from './components/backgroundBlock/backgroundBlock.component';
import { WorkExperienceComponent } from './components/workExperience/workExperience.component';
import { EducationComponent } from './components/education/education.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { ContactFormComponent } from './components/contactForm/contactForm.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LayOutComponent,
    NavBarComponent,
    HeaderComponent,
    SocialBarComponent,
    SummaryComponent,
    SkillsComponent,
    ProfolioComponent,
    BackgroundBlockComponent,
    WorkExperienceComponent,
    EducationComponent,
    ReferenceComponent,
    ContactFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
