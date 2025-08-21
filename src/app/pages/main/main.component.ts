
import { Component } from '@angular/core';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from "./sections/about/about.component";
import { CommonModule } from '@angular/common';
import { SkillsComponent } from "./sections/skills/skills.component";
import { ExperienceComponent } from './sections/experience/experience.component';
import { EducationComponent } from './sections/education/education.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-main',
  imports: [
    CommonModule,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {

}
