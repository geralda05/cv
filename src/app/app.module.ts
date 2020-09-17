import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvHeaderComponent } from './components/cv-header/cv-header.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { WorkComponent } from './components/work/work.component';
import { CertificationComponent } from './components/certification/certification.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LanguagesAndQualitiesComponent } from './components/languages-and-qualities/languages-and-qualities.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CvHeaderComponent,
    ProfileComponent,
    AboutComponent,
    EducationComponent,
    WorkComponent,
    CertificationComponent,
    SkillsComponent,
    LanguagesAndQualitiesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
