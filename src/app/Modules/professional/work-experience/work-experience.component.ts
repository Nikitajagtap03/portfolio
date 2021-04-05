import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  experienceEatonList = [
    "Working as UI developer with Angular 8+, Angular Material, JavaScript, HTML & CSS.",
    "Experience in integrating UI with REST APIs.",
    "Converting designs from wireframes into the application.",
    "Experience in creating self-contained, reusable, and testable modules and components in Angular.",
    "Experience in unit testing with Jasmine & Karma and Jest.",
    "Experience with version control tool like Git & Bitbucket.",
    "Working with agile technologies, experience with Jira."
  ];
  experienceInternList = [
    "Worked on Angular 7 ,bootstrap & HTML for frontend.",
    "Worked on JSON server as backend.",
    "Worked on Java, MySQL.",
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
